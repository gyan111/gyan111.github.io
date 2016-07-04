// Hide the score display div when the page loads fot the first time.
$('#score_details').hide()

// Operation after clicking the display score button.
$('body').on('click', '#display_score', function(e) {

	// Prevent submitting the form
	e.preventDefault();

	// Show error if the language code field or category name is blank.
    if ($('#language_code').val() == "") {
        sweetAlert("Oops...Language Code Missing!", "Enter the language code.", "error");
        return false;
    }
    if ($('#categoty_name').val() == "") {
        sweetAlert("Oops...Category Name Missing!", "Enter the Category name.", "error");
        return false;
    }
    
    // Empty the table body data incase a new request is made.
    $("#score_card_table tbody").empty();

    // Get the values if language code and category.
    var languageCode = $('#language_code').val();
    var category = $('#categoty_name').val();

    // API request URL to retrive cateegory data. 50 Categories.
    var categoryURL = 'https://' + languageCode + '.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:' + category + '&cmlimit=50&format=json&cmprop=title';

    // Make request to get the categories.
    $.getJSON(categoryURL, function(data) {
        
        // check if there is page data available for the category requested.
        if (typeof data.query.categorymembers != "undefined" && data.query.categorymembers != null && data.query.categorymembers.length > 0) {
            
            $.each(data.query.categorymembers, function(i, f) {

            	// API request URL to get the text. Only intro part is retrieved.
                var pageURL = 'https://' + languageCode + '.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&titles=' + f.title + '&format=json';
                
                // Make request  to get the page content.
                $.getJSON(pageURL, function(data) {

                	// Get the page Id key from the response object.
                    var pageId = Object.keys(data.query.pages)[0];

                    // Get the HTML content of the first section.
                    var htmlContent = data.query.pages[pageId].extract;

                    // Making substr to get content of the first pragrapj only, as instructed.
                    var firstParagraphHtmlContent = htmlContent.substring(0, htmlContent.indexOf('</p>') + 4);
                    var text = $(firstParagraphHtmlContent).text()
              		
              		// Calculate Score
                    var score = calulateScore(text);

                    // Create table data and append to the table body.
                    var tableNewRow = '<tr>' + '<td><a href="https://' + languageCode + '.wikipedia.org/wiki/' + data.query.pages[pageId].title + '">' + data.query.pages[pageId].title + '</a></td>' + score + '</tr>';
                    $(tableNewRow).appendTo("#score_card_table tbody");

                    // Display the table.
                    $('#score_details').show()
                });
            });
        } else {

        	// Display error if no data found in the category.
            sweetAlert("Oops...No page found in the category!", "Check the Category name.", "error");
            return false;
        }
    }).fail(function() {
        sweetAlert("Oops...Error!", "Check the Lanuage Code.", "error");
        return false;
    });
});

$(document).ready(function(){
    $('#score_card_table').DataTable( {
        "order": [[ 1, "desc" ]],
        "paging":   false,
        "info":     false,
        "bFilter":  false,
        "columnDefs": [ {
          "targets": [ 0,2,3,4,5,6,7,8,9,10,11,12 ],
          "orderable": false,
        } ]
    });
});

// I couldn't find a Good API for calulating score. So created code by referencing some online readabilty test providers.
function calulateScore(text) {
    var totalCharacters = text.length;

    totalCharacters

    try {
        var lettersAndNumbers = text.match(/[A-Za-z0-9]/g).length;
    } catch (er) {
        var lettersAndNumbers = 0;
    };

    try {
        var spaces = text.match(/ /g).length;
    } catch (er) {
        var spaces = 0;
    };

    text = text.replace(/(\.\.\.|!|\?)/g, ".").replace(/\s*$/g, "");

    try {
        var sentences = text.match(/\./g).length + (text.charAt(text.length - 1) === '.' ? 0 : 1);
    } catch (er) {
        var sentences = 1;
    };

    try {
        sentences -= text.match(/\.\w\w?\./g).length;
    } catch (er) {};

    try {
        sentences -= text.match(/\s\w\w?\./g).length;
    } catch (er) {};

    try {
        var syllables = text.match(/[aeuoi]/g).length;
    } catch (er) {
        var syllables = 0;
    };

    var characterWithoutSpaces = totalCharacters - spaces;

    text = text.replace(/(\.\s*\w)/ig, function($0) {
        return $0.toLowerCase();
    });

    try {
        var shorts = text.match(/(can|don|it|wouldn|aren|he|she|i|you|we|won|didn|ain|isn|doesn)['‘’](t|s|m|re|ll)/ig).length;
    } catch (er) {
        var shorts = 0;
    }

    text = text.replace(/[,\.\\\/\(\)\:\"\';\[\]…‘’„“”«»—–-]/g, " ");
    text = text.replace(/\s\s+/g, " ").replace(/^\s+|\s+$/g, "");
    wordsArray = text.split(' ');

    var wordsCount = wordsArray.length - shorts;
    var wordsPerSentence = Math.round(wordsCount / sentences);


    var totalWordsLength = 0;

    for (var key in wordsArray)
        totalWordsLength += wordsArray[key].length;

    var averageWordLength = Math.round(totalWordsLength / wordsCount)

    topWords = {};
    for (var key in wordsArray) {
        if (/[^\w]/g.test(wordsArray[key]))
            continue;

        if (wordsArray[key] in topWords)
            topWords[wordsArray[key]]++;
        else
            topWords[wordsArray[key]] = 1;
    }


    var complexWordsCount = 0;

    for (var key in wordsArray) {
        try {
            if (!/^[A-Z]/g.test(wordsArray[key])) {
                var wordSyllables = wordsArray[key].match(/[aeuoi]/g).length - 1;

                if (/ing$/ig.test(wordsArray[key]) || /ed$/ig.test(wordsArray[key]) || /es$/ig.test(wordsArray[key]))
                    wordSyllables--;

                if (wordSyllables >= 3)
                    complexWordsCount++;
            }
        } catch (er) {}
    }

    var gunningFogIndex = (0.4 * (wordsPerSentence + 100 * (complexWordsCount / wordsCount))).toFixed(2);
    var colemanLiauIndex = (5.88 * (characterWithoutSpaces / wordsCount) - 29.6 * (sentences / wordsCount) - 15.8).toFixed(2);
    var automatedReadabilityIndex = (4.71 * (lettersAndNumbers / wordsCount) + 0.5 * (wordsCount / sentences) - 21.43).toFixed(2);
    var smogGrade = (1.043 * Math.sqrt(complexWordsCount * (30 / sentences)) + 3.1291).toFixed(2);
    var fleschKincaidGrade = (0.39 * (wordsCount / sentences) + 11.8 * (syllables / wordsCount) - 15.59).toFixed(2);
    var fleschReadingEase = (206.835 - 1.015 * (wordsCount / sentences) - 84.6 * (syllables / wordsCount)).toFixed(2);

    gunningFogIndex = gunningFogIndex < 0 ? 0 : gunningFogIndex;
    colemanLiauIndex = colemanLiauIndex < 0 ? 0 : colemanLiauIndex;
    automatedReadabilityIndex = automatedReadabilityIndex < 0 ? 0 : automatedReadabilityIndex;
    smogGrade = smogGrade < 0 ? 0 : smogGrade;
    fleschKincaidGrade = fleschKincaidGrade < 0 ? 0 : fleschKincaidGrade;
    fleschReadingEase = fleschReadingEase < 0 ? 0 : fleschReadingEase;

    // Creating html table data to show in the result.
    return '<td>' + automatedReadabilityIndex +'</td><td>' + smogGrade + '</td><td>' + fleschKincaidGrade + 
        '</td><td>' + fleschReadingEase + '</td><td>' + gunningFogIndex + '</td><td>' + totalCharacters + 
        '</td><td>' + spaces + '</td><td>' + sentences +'</td><td>' + syllables + '</td><td>' + wordsCount +
        '</td><td>' + wordsPerSentence + '</td><td>' + averageWordLength + '</td>';
}