function akruti_to_unicode()
{
  var array_one = new Array(" û", " ।", "ö" , " ।" ,"÷÷÷", "","£" , "୍ମ" ,"à" , "୍ମ" , "á" , "୍ମୃ" , "ã" , "୍ର" ,"ä" , "୍ଲ" , "å" , "୍ଭ" ,"æ" , "୍ଳ" , "ç" , "୍ୱ" , "è" , "୍ସ" , "ý", "୍ୟ" , "¥", "୍ୟ" ,"ó", "ିଁ" , "Iß" , "ୱ", "Wÿ" , "ଡ଼" , "Xÿ" , "ଢ଼" , "Pÿ" , "ଚ" , "[ô" , "ଥି" ,"]ô" , "ଧି" , "Lô" , "ଖି" , "cô", "ତ୍ମ" ,"û" , "ା" , "ò" , "ି" , "ú" , "ୀ" , "ê" , "ୁ" , "ë" , "ୁ" , "ì" , "ୂ" , "í" ,  "ୂ" ,"é" , "ୃ" , "ñ", "ଁ" , "õ", "ଂ" , "ü", "ଃ" , "þ", "୍" , "¨", "୍‍" ,"1" , "୧" , "2" , "୨" , "3" , "୩" ,"4" , "୪" ,"5" , "୫" ,"6" , "୬" ,"7" , "୭" ,"8" , "୮" , "9" , "୯" , "0" , "୦" , "#" , "୰" , "$" , "ଽ" , "&" , "ଌ" , "*" , "ଞ୍ଚ" , "" ,  "ଞ୍ଚ" , "î" , "୍ରୁ" , "ï" , "୍ରୂ" , "Ð" , "କ୍ଷ୍ଣ" , "Ñ" , "୍କ" ,  "Ò" , "୍ଖ" , "Ó" , "୍ଗ" , "Ô" , "୍ଚ" , "Õ" , "୍ଜ" , "Ö" , "୍ଟ" , "×" , "୍ଠ" , "Ø" , "୍ଡ" , "Ù" , "୍ଣ" , "Ú" , "୍ଥ" , "Û" , "୍ଧ" , "Ü" , "୍ନ" , "Ý" , "୍ପ" , "Þ" , "୍ଫ" , "ß" , "୍ୱ" , "<" , "ଣ୍ଟ" , "" , "ଣ୍ଟ" , "…" , "ଟ୍ଟ" , "μ" , "ମ୍ପ" , "µ" , "ମ୍ପ" , "¶" , "ମ୍ଫ" , "‰" , "ଣ୍ଣ" , "Š" , "ଣ୍ଡ" , "Œ" , "ଣ୍ଠ" , "™" , "ତ୍ମ" , "š" , "ତ୍ପ" , "›" , "ତ୍ସ" , "œ" , "ତ୍ସ୍ନ" , "Ÿ" , "ଦ୍ଧ" , "{" , "ଜ୍ଜ" , "|" , "ଜ୍ଝ" , "}" , "କ୍ର" , "¡" , "ଦ୍ଧ" , "¢" , "ଦ୍ଘ" , "¤" , "ଧ୍ୟ" ,"¦" , "ନ୍ଦ" ,"§" , "ନ୍ଧ" ,"©" , "ତ୍ତ" , "" , "ତ୍ତ" , "ª" , "ନ୍ତ୍ର" , "«" , "ନ୍ତ" , "¬" , "ଞ୍ଜ" , "ƒ" , "ଞ୍ଝ" ,"®" , "ପ୍ପ" , "¯" , "ପ୍ତ" ,"°", "ପ୍ସ" ,"±" , "ବ୍ଦ" , "²" , "ବ୍ଧ" ,"´" , "ମ୍ବ" , "¸" , "ମ୍ଭ" , " ̧" , "ମ୍ଭ", "̧" , "ମ୍ଭ", "¹" , "ମ୍ମ" ,"º" , "ଲ୍କ" ,"»" , "ଲ୍ଗ" ,"¼" , "ଶ୍ଛ" , "½" , "ଶ୍ଚ" , "¾" , "ଷ୍ଣ" , "¿" , "ଷ୍ପ" , "À" , "ଷ୍ଫ" , "Á" , "ଷ୍ଟ" , "Ã" , "ଷ୍କ" , "Ä" , "ସ୍କ" , "Å" , "ସ୍ଖ" , "Æ" , "ସ୍ପ" , "Ç" , "ସ୍ଫ" , "È" , "ସ୍ତ୍ର" , "É" , "ସ୍ତ" ,"Ê" , "ସ୍ୱ" , "Ë" , "ଳ୍କ" , "Ì" , "ଳ୍ପ" , "Í" , "ଳ୍ଫ" , "Î" , "ତ୍ଥ" , "" , "ତ୍ଥ" , "Ï" , "ଳ୍ଳ" , "@ା" , "ଆ" ,"@" , "ଅ" , "A" , "ଇ" ,"B" , "ଈ" ,"C" , "ଉ" ,"D" , "ଊ" , "E" , "ଋ" , "F" , "ୠ" , "G" , "ଏ" , "H" , "ଐ" ,"I" , "ଓ" , "J" , "ଔ" , "K" , "କ" , "L" , "ଖ" , "M" , "ଗ" ,"N" , "ଘ" , "O" , "ଙ" ,"P" , "ଚ", "Q" , "ଛ", "R" , "ଜ", "S" , "ଝ","T" , "ଞ", "U", "ଟ" ,"V", "ଠ" , "W", "ଡ" , "X", "ଢ" ,"Y", "ଣ" ,"Z" , "ତ" , "[" , "ଥ" , "\\" , "ଦ" , "]" , "ଧ" , "^", "ନ" , "~" , "ଯ" , "_" , "ପ","`" , "ଫ", "a" , "ବ", "b" , "ଭ", "c" , "ମ","d" , "ୟ" , "e" , "ର" ,"f" , "ଲ" , "g" , "ଶ" , "h" , "ଷ" , "i" , "ସ" , "j" , "ହ" , "k" , "ଳ" ,"l" , "କ୍ଷ" , "m" , "ଜ୍ଞ" , "n" , "ଦ୍ଭ" , "o" , "କ୍ଟ" , "p" , "କ୍ଟ୍ର" , "q" , "କ୍ତ" , "s" , "ଗ୍ଦ" , "t" , "ଗ୍ଧ" , "u" , "ଙ୍କ" , "v" , "ଙ୍ଖ" ,"w" , "ଙ୍ଗ" ,"x" , "ଙ୍ଘ" ,"y" , "ଚ୍ଚ" ,"z" , "ଚ୍ଛ" ," ̄", "ପ୍ତ"," ́", "ମ୍ବ","‹", "ଣ୍ଢ" , "ଏø", " ଐ", "୍ଯ" , "୍ୟ", " ̈", "୍‍", "ଅା", "ଆ" ) 
 
  var array_one_length = array_one.length ;
  var modified_substring = $("#input_text").val(); 
  var text_size = modified_substring.length ;
  var processed_text = "" ;  
  var position1 = 0 ;  var position2 = 0 ;  var process_queue = 1 ;
  var chunk_size = 6000; 
  while ( process_queue == 1 ) 
  {
    position1 = position2 ;
    if ( position2 < ( text_size - chunk_size ) )  
    { 
      position2 +=  chunk_size ;
      while (document.getElementById("input_text").value.charAt ( position2 ) != ' ') {position2--;} 
    } 
    else  { position2 = text_size  ;  process_queue = 0 }
    var modified_substring = document.getElementById("input_text").value.substring ( position1, position2 )  ;
    Replace_Symbols( ) ;
    var processed_text = processed_text + modified_substring ;
    $("#unicode_text").val("Conversion in progress.." + '\n\n' + 'Conversion of ' + position2 + ' charecters out of ' + text_size + ' completed.'); 
  }
  $("#unicode_text").val(processed_text);
  function Replace_Symbols( )
  {
    if ( modified_substring != "" )  
    {
      for ( input_symbol_idx = 0;   input_symbol_idx < array_one_length-1;    input_symbol_idx = input_symbol_idx + 2 )
      { 
        idx = 0  ;  
          while (idx != -1 ) 
          {
            modified_substring = modified_substring.replace( array_one[ input_symbol_idx ] , array_one[input_symbol_idx+1] );
            idx = modified_substring.indexOf( array_one[input_symbol_idx] );
          } 
 
      }
      modified_substring = modified_substring.replace( /([ù])([କଖଗଘଙଚଛଜଝଞଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯୟରଲବୱଶଷସହକ୍ଷଡ଼ଳ])/g , "$2$1" );
      modified_substring = modified_substring.replace( /([ù])([୍])([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥନପଫବଭମୟରଲବୱଶଷସହକ୍ଷଡ଼ଳ])/g , "$2$3$1" );
      modified_substring = modified_substring.replace( /([ù])([୍])([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥନପଫବଭମୟରଲବୱଶଷସହକ୍ଷଡ଼ଳ])/g , "$2$3$1" );
      modified_substring = modified_substring.replace( /ùø/g  ,  "ୌ" );
      modified_substring = modified_substring.replace( /ùା/g  ,  "ୋ" );
      modified_substring = modified_substring.replace( /ù÷/g  ,  "ୈ" );
      modified_substring = modified_substring.replace( /ù/g  ,  "େ" );
      modified_substring = modified_substring.replace( /([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([ାିୀୁୂୃେୈୋୌଂଁ]*)à/g , "ð$1$2" );
      modified_substring = modified_substring.replace( /([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([ାିୀୁୂୃେୈୋୌଂଁ]*)ð/g , "ð$1$2" );
      modified_substring = modified_substring.replace( /([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([୍])à/g , "ð$1$2" );
      modified_substring = modified_substring.replace( /([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([୍])ð/g , "ð$1$2" );
      modified_substring = modified_substring.replace( /ð/g , "ର୍" );
      modified_substring = modified_substring.replace( /([ଂଁ])([ାିୀୁୂୃେୈୋୌ])/g , "$2$1" );
    }
  }
}