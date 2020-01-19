$( document ).ready(function() {
	$(".converter-button").on("click", function(event){

		if ($('#input_text').val() == "") {
	        swal("Oops...Nothing to convert!", "Paste your text in the left side box first.", "error");
	        return false;
	    }
		var text = $("#input_text").val();
		var type = $(this).attr('id');

		$('.clear-text').show();
		
		$.ajax({
			url: '//jsahu.me/ouc/',
		  type:"POST",
		  data: { input_text: text, type: type}
		}).done(function(data) {
			if (data === 'Go to https://jsahu.me/tools/ouc') {
				swal("Today's free quota is over. Go to the main website. All issues fixed there. https://jsahu.me/tools/ouc")
				.then((value) => {
					if (value) {
						window.location= 'https://jsahu.me/tools/ouc';
					}
				});
				return false;
			}
		  	$("#unicode_text").val(data.replace(/\\n/g, "\n"));
		});
	} );

	$('#unicode_text_button').click(function(){
		if ($('#unicode_text').val() == "") {
		  swal("Oops...There is nothing to copy!", "Please paste some text in the left box first.", "error");
		} else {
		  //select the converted text
		  $('#unicode_text').select();
		  //copy the selected text
		  document.execCommand('copy');

		  $('#unicode_text_button').text('Copied');
		  $('#unicode_text_button').removeClass('btn-primary');
		  $('#unicode_text_button').addClass('btn-success');
		  setTimeout(function(){
		  	$('#unicode_text_button').text('Click to select all and copy');
		  	$('#unicode_text_button').removeClass('btn-success');
		    $('#unicode_text_button').addClass('btn-primary');			    
		  }, 500);
		}
	});
	$('.clear-text').hide();
	$( "#input_text" ).focus();
	$('.clear-text').click(function(){
		$('textarea').val('');
		// $(this).parent().parent().find('textarea').focus();
		$( "#input_text" ).focus();
		$('.clear-text').hide();
	});

	$( '#unicode_text' ).ime();
	// $.toast({
	//     heading: 'Issue Fixed',
	//     text: 'There was a server issue and it is fixed now.',
	//     showHideTransition: 'slide',
	//     icon: 'success',
	//     position: 'top-right',
	// })
});
if (location.protocol !== "https:") location.protocol = "https:";