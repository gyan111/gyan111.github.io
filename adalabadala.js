// Using pure javascript code as it can be used as offline 
function akruti_to_unicode()
{
  //var conversion_array = new Array(" û", " ।", "ö" , " ।" ,"÷÷÷", "","£" , "୍ମ" ,"à" , "୍ମ" , "á" , "୍ମୃ" , "ã" , "୍ର" ,"ä" , "୍ଲ" , "å" , "୍ଭ" ,"æ" , "୍ଳ" , "ç" , "୍ୱ" , "è" , "୍ସ" , "ý", "୍ୟ" , "¥", "୍ୟ" ,"ó", "ିଁ" , "Iß" , "ୱ", "Wÿ" , "ଡ଼" , "Xÿ" , "ଢ଼" , "Pÿ" , "ଚ" , "[ô" , "ଥି" ,"]ô" , "ଧି" , "Lô" , "ଖି" , "cô", "ତ୍ମ" ,"û" , "ା" , "ò" , "ି" , "ú" , "ୀ" , "ê" , "ୁ" , "ë" , "ୁ" , "ì" , "ୂ" , "í" ,  "ୂ" ,"é" , "ୃ" , "ñ", "ଁ" , "õ", "ଂ" , "ü", "ଃ" , "þ", "୍" , "¨", "୍‍" ,"1" , "୧" , "2" , "୨" , "3" , "୩" ,"4" , "୪" ,"5" , "୫" ,"6" , "୬" ,"7" , "୭" ,"8" , "୮" , "9" , "୯" , "0" , "୦" , "#" , "୰" , "$" , "ଽ" , "&" , "ଌ" , "*" , "ଞ୍ଚ" , "" ,  "ଞ୍ଚ" , "î" , "୍ରୁ" , "ï" , "୍ରୂ" , "Ð" , "କ୍ଷ୍ଣ" , "Ñ" , "୍କ" ,  "Ò" , "୍ଖ" , "Ó" , "୍ଗ" , "Ô" , "୍ଚ" , "Õ" , "୍ଜ" , "Ö" , "୍ଟ" , "×" , "୍ଠ" , "Ø" , "୍ଡ" , "Ù" , "୍ଣ" , "Ú" , "୍ଥ" , "Û" , "୍ଧ" , "Ü" , "୍ନ" , "Ý" , "୍ପ" , "Þ" , "୍ଫ" , "ß" , "୍ୱ" , "<" , "ଣ୍ଟ" , "" , "ଣ୍ଟ" , "…" , "ଟ୍ଟ" , "μ" , "ମ୍ପ" , "µ" , "ମ୍ପ" , "¶" , "ମ୍ଫ" , "‰" , "ଣ୍ଣ" , "Š" , "ଣ୍ଡ" , "Œ" , "ଣ୍ଠ" , "™" , "ତ୍ମ" , "š" , "ତ୍ପ" , "›" , "ତ୍ସ" , "œ" , "ତ୍ସ୍ନ" , "Ÿ" , "ଦ୍ଧ" , "{" , "ଜ୍ଜ" , "|" , "ଜ୍ଝ" , "}" , "କ୍ର" , "¡" , "ଦ୍ଧ" , "¢" , "ଦ୍ଘ" , "¤" , "ଧ୍ୟ" ,"¦" , "ନ୍ଦ" ,"§" , "ନ୍ଧ" ,"©" , "ତ୍ତ" , "" , "ତ୍ତ" , "ª" , "ନ୍ତ୍ର" , "«" , "ନ୍ତ" , "¬" , "ଞ୍ଜ" , "ƒ" , "ଞ୍ଝ" ,"®" , "ପ୍ପ" , "¯" , "ପ୍ତ" ,"°", "ପ୍ସ" ,"±" , "ବ୍ଦ" , "²" , "ବ୍ଧ" ,"´" , "ମ୍ବ" , "¸" , "ମ୍ଭ" , " ̧" , "ମ୍ଭ", "̧" , "ମ୍ଭ", "¹" , "ମ୍ମ" ,"º" , "ଲ୍କ" ,"»" , "ଲ୍ଗ" ,"¼" , "ଶ୍ଛ" , "½" , "ଶ୍ଚ" , "¾" , "ଷ୍ଣ" , "¿" , "ଷ୍ପ" , "À" , "ଷ୍ଫ" , "Á" , "ଷ୍ଟ" , "Ã" , "ଷ୍କ" , "Ä" , "ସ୍କ" , "Å" , "ସ୍ଖ" , "Æ" , "ସ୍ପ" , "Ç" , "ସ୍ଫ" , "È" , "ସ୍ତ୍ର" , "É" , "ସ୍ତ" ,"Ê" , "ସ୍ୱ" , "Ë" , "ଳ୍କ" , "Ì" , "ଳ୍ପ" , "Í" , "ଳ୍ଫ" , "Î" , "ତ୍ଥ" , "" , "ତ୍ଥ" , "Ï" , "ଳ୍ଳ" , "@ା" , "ଆ" ,"@" , "ଅ" , "A" , "ଇ" ,"B" , "ଈ" ,"C" , "ଉ" ,"D" , "ଊ" , "E" , "ଋ" , "F" , "ୠ" , "G" , "ଏ" , "H" , "ଐ" ,"I" , "ଓ" , "J" , "ଔ" , "K" , "କ" , "L" , "ଖ" , "M" , "ଗ" ,"N" , "ଘ" , "O" , "ଙ" ,"P" , "ଚ", "Q" , "ଛ", "R" , "ଜ", "S" , "ଝ","T" , "ଞ", "U", "ଟ" ,"V", "ଠ" , "W", "ଡ" , "X", "ଢ" ,"Y", "ଣ" ,"Z" , "ତ" , "[" , "ଥ" , "\\" , "ଦ" , "]" , "ଧ" , "^", "ନ" , "~" , "ଯ" , "_" , "ପ","`" , "ଫ", "a" , "ବ", "b" , "ଭ", "c" , "ମ","d" , "ୟ" , "e" , "ର" ,"f" , "ଲ" , "g" , "ଶ" , "h" , "ଷ" , "i" , "ସ" , "j" , "ହ" , "k" , "ଳ" ,"l" , "କ୍ଷ" , "m" , "ଜ୍ଞ" , "n" , "ଦ୍ଭ" , "o" , "କ୍ଟ" , "p" , "କ୍ଟ୍ର" , "q" , "କ୍ତ" , "s" , "ଗ୍ଦ" , "t" , "ଗ୍ଧ" , "u" , "ଙ୍କ" , "v" , "ଙ୍ଖ" ,"w" , "ଙ୍ଗ" ,"x" , "ଙ୍ଘ" ,"y" , "ଚ୍ଚ" ,"z" , "ଚ୍ଛ" ," ̄", "ପ୍ତ"," ́", "ମ୍ବ","‹", "ଣ୍ଢ" , "ଏø", " ଐ", "୍ଯ" , "୍ୟ", " ̈", "୍‍", "ଅା", "ଆ") 
  var conversion_array = new Array(
    " û", " ।", // purnacheda
    "ö" , " ।" , // purnacheda
    "÷÷÷", "", //
    // double accented - AkrutiOriSarala
    "£" , "୍ମ" , // ma phala
    "à" , "୍ମ" , // ma phala
    "á" , "୍ମୃ" , // (halanta)m-Rû
    "â" , "୍ର" , // ra
    "ã" , "୍ର" , // reph
    "ä" , "୍ଲ" , // la phala
    "å" , "୍ଭ" , // halanta- bha
    "æ" , "୍ଳ" , // halanta-La
    "ç" , "୍ୱ" , // ba phala
    "è" , "୍ସ" , // halanta-sa
    "ý", "୍ୟ" , // ja phala
    "¥", "୍ୟ" , // ja phala
    "ó", "ିଁ" , // i kara

    "Iß" , "ୱ", //wa
    "Wÿ" , "ଡ଼" , // Da with bindu
    "Xÿ" , "ଢ଼" , // Dha with bindu
    "Pÿ" , "ଚ" , // c
    "[ô" , "ଥି" , // thi
    "]ô" , "ଧି" , // dhi
    "Lô" , "ଖି" , // khi
    "cô", "ତ୍ମ" , // tma

    "û" , "ା" , // aa kara
    "ò" , "ି" , // i kara
    "ú" , "ୀ" , // dirgha i kara
    "ê" , "ୁ" , // u kara
    "ë" , "ୁ" , // u kara
    "ì" , "ୂ" , // dirgha i kara
    "í" ,  "ୂ" , // dirgha u kara
    "é" , "ୃ" , // ru kara

    "ñ", "ଁ" , // chandrabindu
    "õ", "ଂ" , // anuswara
    "ü", "ଃ" , // bisarga
    "þ", "୍" , //halanta
    "¨", "୍‍" , // halanta with zero width non joiner

    "1" , "୧" , // Numeric 1
    "2" , "୨" , // Numeric 2
    "3" , "୩" , // Numeric 3
    "4" , "୪" , // Numeric 4
    "5" , "୫" , // Numeric 5
    "6" , "୬" , // Numeric 6
    "7" , "୭" , // Numeric 7
    "8" , "୮" , // Numeric 8
    "9" , "୯" , // Numeric 9
    "0" , "୦" , // Numeric 10
    "#" , "୰" , // late
    "$" , "ଽ" , 
    "&" , "ଌ" , // lu
    "*" , "ଞ୍ଚ" , // nc
    "" ,  "ଞ୍ଚ" , // nc
    "î" , "୍ରୁ" , // halanta-r-u
    "ï" , "୍ରୂ" , // halanta-r-dirgha u

    "Ð" , "କ୍ଷ୍ଣ" , // khya-N
    "Ñ" , "୍କ" ,  // halanta-k
    "Ò" , "୍ଖ" , // halanta-kh
    "Ó" , "୍ଗ" , // halanta-g
    "Ô" , "୍ଚ" , // halanta-c
    "Õ" , "୍ଜ" , // halanta-j
    "Ö" , "୍ଟ" , // halanta-T
    "×" , "୍ଠ" , // halanta-Th
    "Ø" , "୍ଡ" , // halanta-D
    "Ù" , "୍ଣ" , // halanta-N
    "Ú" , "୍ଥ" , // halanta-th
    "Û" , "୍ଧ" , // halanta-dh
    "Ü" , "୍ନ" , // halanta-n
    "Ý" , "୍ପ" , // halanta-p
    "Þ" , "୍ଫ" , // halanta-ph
    "ß" , "୍ୱ" , // halanta-b

    "<" , "ଣ୍ଟ" , // NT
    "" , "ଣ୍ଟ" , // NT
    "…" , "ଟ୍ଟ" , // TT
    "μ" , "ମ୍ପ" , // mp
    "µ" , "ମ୍ପ" , // mp
    "¶" , "ମ୍ଫ" , // mph
    "‰" , "ଣ୍ଣ" , // NN
    "Š" , "ଣ୍ଡ" , // ND

    "Œ" , "ଣ୍ଠ" , // NTh
    "™" , "ତ୍ମ" , // tm
    "š" , "ତ୍ପ" , // tp
    "›" , "ତ୍ସ" , // ts
    "œ" , "ତ୍ସ୍ନ" , // t-s-n
    "Ÿ" , "ଦ୍ଧ" , // d-dh


    "{" , "ଜ୍ଜ" , // jj
    "|" , "ଜ୍ଝ" , // j-jh
    "}" , "କ୍ର" , // kr

    "¡" , "ଦ୍ଧ" , // d-dh
    "¢" , "ଦ୍ଘ" , // d-gh
    "¤" , "ଧ୍ୟ" , // dhya
    "¦" , "ନ୍ଦ" , // nd
    "§" , "ନ୍ଧ" , // ndh
    "©" , "ତ୍ତ" , // tt
    "" , "ତ୍ତ" , // tt
    "ª" , "ନ୍ତ୍ର" , // ntr (jantra)
    "«" , "ନ୍ତ" , // nt
    "¬" , "ଞ୍ଜ" , // nj
    "ƒ" , "ଞ୍ଝ" , // njh
    "®" , "ପ୍ପ" , // pp
    "¯" , "ପ୍ତ" , // pt

    "°", "ପ୍ସ" , // ps
    "±" , "ବ୍ଦ" , // bd
    "²" , "ବ୍ଧ" , // bdh
    "´" , "ମ୍ବ" , // mb
    "¸" , "ମ୍ଭ" , // mbh
    " ̧" , "ମ୍ଭ", // ***mbha
    "̧" , "ମ୍ଭ", // mbha
    "¹" , "ମ୍ମ" , // mm
    "º" , "ଲ୍କ" , // lk
    "»" , "ଲ୍ଗ" , // lg
    "¼" , "ଶ୍ଛ" , // Nch
    "½" , "ଶ୍ଚ" , // S-ch (talabya sa - ca)
    "¾" , "ଷ୍ଣ" , // sh-N (murdhanya sa - Na)
    "¿" , "ଷ୍ପ" , // sh-p (murdhanya sa - pa)

    "À" , "ଷ୍ଫ" , // sh-ph (murdhanya sa - pha)
    "Á" , "ଷ୍ଟ" , // sh-T (murdhanya sa - Ta)
    "Â" , "ଷ୍ଠ" , // sh-Th (murdhanya sa - Tha)
    "Ã" , "ଷ୍କ" , // sh-k (murdhanya sa - ka)
    "Ä" , "ସ୍କ" , // s-k
    "Å" , "ସ୍ଖ" , // sh-kh
    "Æ" , "ସ୍ପ" , // sp
    "Ç" , "ସ୍ଫ" , // sph
    "È" , "ସ୍ତ୍ର" , // str
    "É" , "ସ୍ତ" , // st
    "Ê" , "ସ୍ୱ" , // sb
    "Ë" , "ଳ୍କ" , // lk
    "Ì" , "ଳ୍ପ" , // Lp
    "Í" , "ଳ୍ଫ" , // Lph
    "Î" , "ତ୍ଥ" , // t-th
    "" , "ତ୍ଥ" , // t-th
    "Ï" , "ଳ୍ଳ" , // L-L

    "@ା" , "ଆ" , // aa
    "@" , "ଅ" , // a
    "A" , "ଇ" , // i
    "B" , "ଈ" , // dirgha i
    "C" , "ଉ" , // u
    "D" , "ଊ" , // dirgha u
    "E" , "ଋ" , // R
    "F" , "ୠ" , // RR
    "G" , "ଏ" , // e
    "H" , "ଐ" , // ai
    "I" , "ଓ" , // o
    "J" , "ଔ" , // au 

    "K" , "କ" , // k
    "L" , "ଖ" , // kh
    "M" , "ଗ" , // g
    "N" , "ଘ" , // gh
    "O" , "ଙ" ,

    "P" , "ଚ",  // c
    "Q" , "ଛ", // ch
    "R" , "ଜ", // j
    "S" , "ଝ", // jh
    "T" , "ଞ", // Nya

    "U", "ଟ" , // T
    "V", "ଠ" , // Th
    "W", "ଡ" , // D
    "X", "ଢ" , // Dh
    "Y", "ଣ" , // N
    "Z" , "ତ" , // t
    "[" , "ଥ" , // th
    "\\" , "ଦ" , // d
    "]" , "ଧ" , // dh
    "^", "ନ" , // n
    "~" , "ଯ" , // y
    "_" , "ପ", // p
    "`" , "ଫ", // ph
    "a" , "ବ", // b
    "b" , "ଭ", // bh
    "c" , "ମ", // m
    "d" , "ୟ" , // y
    "e" , "ର" , // r
    "f" , "ଲ" , // l
    "g" , "ଶ" , // S (talabya sa)
    "h" , "ଷ" , // sh (murdhanya sa)
    "i" , "ସ" , // s
    "j" , "ହ" , // h
    "k" , "ଳ" , // L
    "l" , "କ୍ଷ" , // ksh
    "m" , "ଜ୍ଞ" , // gya
    "n" , "ଦ୍ଭ" , // d-bh
    "o" , "କ୍ଟ" , // kT
    "p" , "କ୍ଟ୍ର" , // kTr
    "q" , "କ୍ତ" , // kt
    "r" , "କ୍ସ" , // ks
    "s" , "ଗ୍ଦ" , // gd
    "t" , "ଗ୍ଧ" , // gdh
    "u" , "ଙ୍କ" , 
    "v" , "ଙ୍ଖ" ,
    "w" , "ଙ୍ଗ" ,
    "x" , "ଙ୍ଘ" ,
    "y" , "ଚ୍ଚ" ,
    "z" , "ଚ୍ଛ" ,
    " ̄", "ପ୍ତ",
    " ́", "ମ୍ବ",
    "‹", "ଣ୍ଢ" , // ndha
    "ଏø", " ଐ", // ai
    "୍ଯ" , "୍ୟ", // ja phala
    " ̈", "୍‍", // halanta with ZWJ
    "ଅା", "ଆ"  // aa
 );

  var conversion_array_length = conversion_array.length;
  var input_string = document.getElementById("input_text").value;  
  //break the text to small chunks
  var text_size = input_string.length;
  var unicode_text = ''; 
  var position1 = 0;
  var position2 = 0;
  var process_queue = 1;
  var chunk_size = 10000; // this character long text will be processed in one go.
  while (process_queue == 1) {
    //to start from where left
    position1 = position2;
    //if the input character long then process the queue else set it as last queue
    if (position2 < (text_size-chunk_size)) {
      position2 +=  chunk_size;
    } else {
      position2 = text_size;
      process_queue = 0 
    }
    var input_string = document.getElementById("input_text").value.substring(position1, position2);
    replace_symbols();
    var unicode_text = unicode_text + input_string;
    document.getElementById("unicode_text").value = "Conversion in progress.." + '\n\n' + 'Conversion of ' + position2 + ' charecters out of ' + text_size + ' completed.'; 
  }                                                                                                                   
  document.getElementById("unicode_text").value = unicode_text;
  select_and_copy()  
  function replace_symbols() {
    //substitute array_two elements in place of corresponding conversion_array elements
    // if string to be converted is non-blank then no need of any processing.
    if (input_string != "") {
      for (conversion_character_index = 0;   conversion_character_index < conversion_array_length-1;    conversion_character_index = conversion_character_index + 2) {
        index = 0;
        while (index != -1)
        {
          input_string = input_string.replace(conversion_array[conversion_character_index] , conversion_array[conversion_character_index+1])
          index = input_string.indexOf(conversion_array[conversion_character_index])
        } 
      }
      // following statements for adjusting position of e, ai, o and au maatraas.
      input_string = input_string.replace(/([ù])([କଖଗଘଙଚଛଜଝଞଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯୟରଲବୱଶଷସହକ୍ଷଡ଼ଳ])/g , "$2$1");
      //ଟଠଡଡ଼ଢଢ଼ଣତଥ
      input_string = input_string.replace(/([ù])([୍])([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥନପଫବଭମୟରଲବୱଶଷସହକ୍ଷଡ଼ଳ])/g , "$2$3$1");
      input_string = input_string.replace(/ùø/g  ,  "ୌ");
      input_string = input_string.replace(/ùା/g  ,  "ୋ");
      input_string = input_string.replace(/ù÷/g  ,  "ୈ");
      input_string = input_string.replace(/ù/g  ,  "େ");
      //following three statement for adjusting position of reph ie, half r .
      input_string = input_string.replace(/([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([ାିୀୁୂୃେୈୋୌଂଁ]*)à/g , "ð$1$2");
      input_string = input_string.replace(/([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([ାିୀୁୂୃେୈୋୌଂଁ]*)ð/g , "ð$1$2");
      input_string = input_string.replace(/([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([୍])à/g , "ð$1$2");
      input_string = input_string.replace(/([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([୍])ð/g , "ð$1$2");
      input_string = input_string.replace(/ð/g , "ର୍");
      input_string = input_string.replace(/([ଂଁ])([ାିୀୁୂୃେୈୋୌ])/g , "$2$1");
    } // end of IF  statement  meant to  suppress processing of  blank  string.

  } // end of the function  replace_symbols
} // end of convert_to_unicode function


//#2 Sreelipi Conversion 
function sreelipi_to_unicode() {
  var conversion_array = new Array(
    ">" , " ।" ,
    "ÿ" , "" , //blank
    "􀃛" , "" ,
    "ç§" , "§ç" ,
    "􀁞" , "{" ,
    "{ç " , "ç{" ,
    "{ç" , "ç{" ,
    "ôæ" , "æô" ,
    " {# " , "#{" ,
    "{#" , "#{" ,
    "¿â" , "â¿" ,
    "􀀃" , " " ,
    "  " , " " ,

    "1" , "୧" ,
    "2" , "୨" ,
    "3" , "୩" ,
    "4" , "୪" ,
    "5" , "୫" ,
    "6" , "୬" ,
    "7" , "୭" ,
    "8" , "୮" ,
    "9" , "୯" ,
    "0" , "୦" ,

    "þ#" , "ତ୍ମ" ,
    "Œ", "ତ୍ପ",
    "”", "ଦ୍ଦ",

    "b" , "ଚ୍ଛ" ,
    "t" , "ଟ୍ଟ" ,
    "􀁲" , "ଦ୍ଦ" ,
    "􀁪" , "ତ୍ମ" ,
    "􀁧" , "ତ୍କ" ,
    "û" , "ତ୍ସ" ,
    "􀁩" , "ତ୍ତ୍ଵ" ,
    "½" , "୍ମ" ,
    "􀁵" , "ଦ୍ଭ" , // dbha


    "¸" , "ମ୍ପ" , //mpa
    "¹" , "ମ୍ଫ" , // mpha
    "¼" , "ମ୍ମ" , //mma


    "Ú" , "ସ୍ତ୍ର" ,
    "Í" , "ଷ୍କ" ,
    "O" , "କ୍ସ" ,
    "Ð" , "ଷ୍ଣ" ,
    "À" , "ର" ,
    "à" , "ଲ" ,
    "Ü" , "ହ" ,
    "􀁨" , "ତ୍ତ" ,

    "L" , "କ" , // ka
    "Q" , "ଖ" , // kha
    "S" , "ଗ" , // ga
    "W" , "ଘ" , // gha
    "`" , "ଚ" , // ca
    "a" , "ଚ୍ଚ" , // cc (dwitiya)
    "d" , "ଛ" , // cha
    "f" , "ଜ" , // ja

    "l" , "ଝ" , // jha

    "s" , "ଟ" , // Ta
    "v" , "ଠ" , // Tha
    "Ý" , "ଡ଼" , // Da (bindu)
    "x" , "ଡ" , // Da
    "Þ" , "ଢ଼" , // Dha (bindu)
    "|" , "ଢ" , // Dha
    "~" , "ଣ" , // Na
    "􀁢" , "ଣ୍ଣ" , // NNa

    "􀁦" , "ତ" , // ta
    "†" , "ତ" , //ta
    "$" , "ଥ" , // tha
    "􀁰" , "ଦ" , // da
    "’" , "ଦ" , // da
    "􀁷" , "ଧ" , // dha
    "™" , "ଧ" , // dha (new)
    "􀁺" , "ନ" , // na
    "œ" , "ନ" , // na (new)
    "oe" , "ନ" , // na

    "¨" , "ପ" , // pa
    "􀂄" , "ପ" , //pa
    "ü" , "ଫ" , // pha
    "¯" ,  "ବ" , // da
    "μ" , "ଭ" , // bha
    "µ" , "ଭ" , // bha
    "þ" , "ମ" , // ma
    "􀃚" , "ମ" , // ma
    "¾" , "ଯ" , // ja (antastha)

    "Á" , "ଳ" ,

    "É" , "ଶ" , // Sa (talabya)
    "􀂥" , "ଶ" , // Sa (talabya)
    "Ì" , "ଷ" , // Sa (murdhanya)
    "Ó" , "ସ" , // Sa
    "ä" , "କ୍ଷ" , // khya
    "j" , "ଜ୍ଞ" , // Gya


    "o" , "ଞ୍ଚ" , // nca
    "p" , "ଞ୍ଛ" , // ncha
    "¢" , "ନ୍ଦ" , // nda
    "£" , "ନ୍ଦ" , // nda
    "¤" , "ନ୍ଧ" , // ndha
    "ƒ" , "ଣ୍ଡ" , // nDa
    "º" , "ମ୍ବ" , //mba
    "»" , "ମ୍ଭ" , // mbh
    "±" , "ବ୍ଦ" , // bda
    "􀁳" , "ଦ୍ଧ" , // bdha
    "²", "ବ୍ଧ" , // bdha

    "¡" , "ନ୍ଥ" , // nth
    "×" , "ସ୍ଥ" , //sth
    "􀁻" , "ନ୍ନ" , //nn

    "􀁸" , "ଧ୍ୟ" , // dhya
    "š" , "ଧ୍ୟ" , // dhya

    "ø" , "÷ë" ,
    "÷" , "୍ର" , // reph
    "¿" , "୍ୟ" , // ja phala 
    "´" , "୍ୱ" , // ba phala

    "Ô" , "ସ୍କ" , // ska
    "§" , "୍ନ" , // na phala
    "ü" , "ଫ" , // pha
    "u" , "ଫ" ,  // Ta phala
    "Û" , "୍ସ" ,

    "Ÿ" , "ନ୍ନ" , // nna
    "•" , "ଦ୍ଧ" , // ddha
    "ˆ" , "ତ୍ତ" , // tta
    ";" , "ନ୍ତ" , // nta
    "􀁣" , "ଣ୍ଡ" , // NDa
    " ß" , "ୟ" , // ya
    "ß" , "ୟ" , // ya
    "Ö" , "ସ୍ତ" , // sta
    "N" , "କ୍ତ" , // kta
    "¦" , "ନ୍ତ୍ର" , // ntr
    "g" , "ଜ୍ଜ" , // jja
    "©" , "ପ୍ତ" , // pta
    "‡" , "ତ୍କ" , //tka
    "Š" , "ତ୍ମ" , //tma
    "‚" , "ଣ୍ଣ" , //NNa (dwitiya)
    "Z" , "ଙ୍କ" ,
    "\\" , "ଙ୍ଖ" , // nkha
    "\è" , "ଙ୍ଗ" , // nga
    "q" , "ଞ୍ଜ" , // nja

    "+" , "ଣ୍ଟ" , // NTa
    "Î" , "ଷ୍ଟ" , // STa
    "Ê" , "ଶ୍ଚ" , // Sca
    "Ï" , "ଷ୍ଠ" , // Lpa
    "Å" , "ଳ୍ପ" , // Lpa
    "Ñ" , "ଷ୍ପ" , // Spa (murdhanya)
    "Ø" , "ସ୍ପ" , // spa
    "Ù" , "ସ୍ପ" , // spa

    " æ" , "ା" , // aa kara
    "æ" , "ା" , // aa kara
    "􀃂" , "ା" , // aa kara
    " ା", " ।", // purnached
    " ç" , "ି" , // i kara
    "ÿ]" , "ିଁ" , // i kara
    "ç" , "ି" , // i kara
    "􀃃" , "ି" , // i kara
    //"#" , "ି" , // i kara --manoj
    "ê" , "ୀ" , // I kara
    "􀃆" , "ୀ" , // I kara

    " ë" , "ୁ" , // u kara
    "ë" , "ୁ" , // u kara
    "􀃇" , "ୁ" , // u kara
    "í" , "ୂ" , // u kara
    "õ " , "ୃ" , // u kara
    "õ" , "ୃ" , // R kara
    "ô" , "ଁ" , // Anuswara
    "􀁥" , "ଃ" , // bisarga
    "…" , "ଃ" , // bisarga
    "ú" , "୍" , // halanta

    "ó" , "ଂ" , // chandrabindu
    "]" , "ିଁ" , // i kara
    "â" , "୍ଲ" , // la
    "È" , "୍ଳ" , // La
    "úÿ" , "୍‌" , //ka halanta zero-width non joiner

    ' ̄',"ବ",
    '̄',"ବ",
    ' ́',"୍ୱ",
    '́',"୍ୱ",
     '̈','ପ',

    "A" , "ଅ" , // a
    "􀀤" , "ଅ" , // a
    "ଅା" , "ଆ" , // aa
    "B" , "ଇ" , // i
    "􀀥" , "ଇ" , // i
    "D" , "ଉ" , // u
    "􀀧" , "ଉ" , // u
    "E" , "ଊ" , // U
    "J" , "ଋ" , // R
    "F" , "ଏ" , // e
    "G" , "ଐ" , // ai
    "􀀪" , "ଐ" , // ai
    "H" , "ଓ" , // o
    "I" , "ଔ" , // au
    "K" , "ଔ"     // au
 );

  var conversion_array_length = conversion_array.length;
  var modified_substring = document.getElementById("input_text").value;  
  var text_size = modified_substring.length;
  var processed_text = '';
  var position1 = 0;
  var position2 = 0;
  var process_queue = 1;
  var chunk_size = 10000;
  while (process_queue == 1) {
    position1 = position2;
    if (position2 < (text_size - chunk_size)) {
      position2 +=  chunk_size;
    } else {
      position2 = text_size;
      process_queue = 0;
    }
    var modified_substring = document.getElementById("input_text").value.substring(position1, position2);
    replace_symbols();
    var processed_text = processed_text + modified_substring;
    document.getElementById("unicode_text").value = "Conversion in progress.." + '\n\n' + 'Conversion of ' + position2 + ' charecters out of ' + text_size + ' completed.'; 
  }
  document.getElementById("unicode_text").value = processed_text;
  select_and_copy();
  function replace_symbols() {
    if (modified_substring != "") {
      for (conversion_character_index = 0;   conversion_character_index < conversion_array_length-1;    conversion_character_index = conversion_character_index + 2) {
        index = 0;  // index of the symbol being searched for replacement
        while (index != -1) {
          modified_substring = modified_substring.replace(conversion_array[ conversion_character_index ] , conversion_array[conversion_character_index+1])
          index = modified_substring.indexOf(conversion_array[conversion_character_index])
        } // end of while-00 loop
      } // end of for loop
      // see if the following needs to include more letters than  [କସ]
      //modified_substring = modified_substring.replace(  /([କସ])([ú])/g , "ତ୍$1");
      // following statements for adjusting postion of e, ai, o and au maatraas.
      modified_substring = modified_substring.replace(  /([{])([କଖଗଘଙଚଛଜଝଞଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳବଶଷସହକ୍ଷଜ୍ଞୟ])/g , "$2$1");
      modified_substring = modified_substring.replace(/([{])([୍])([କଖଗଘଙଚଛଜଝଞଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳବଶଷସହକ୍ଷଜ୍ଞୟ])/g , "$2$3$1");
      modified_substring = modified_substring.replace(/([{])([୍])([କଖଗଘଙଚଛଜଝଞଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳବଶଷସହକ୍ଷଜ୍ଞୟ])/g , "$2$3$1");
      modified_substring = modified_substring.replace(/{ð/g  ,  "ୈ");
      modified_substring = modified_substring.replace(/{ା/g  ,  "ୋ");
      modified_substring = modified_substring.replace(/{ò/g  ,  "ୌ");
      modified_substring = modified_substring.replace(/{/g   ,  "େ");
      //following three statement for adjusting position of reph ie, half r .
      modified_substring = modified_substring.replace(/([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([ାିୀୁୂୃେୈୋୌଂଁ]*)ö/g , "ö$1$2");
      modified_substring = modified_substring.replace(/([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([୍])ö/g , "ö$1$2");
      modified_substring = modified_substring.replace(/ö/g , "ର୍");
      modified_substring = modified_substring.replace(/([ଂଁ])([ାିୀୁୂୃେୈୋୌ])/g , "$2$1");
      //following three statement for adjusting position of reph and i .
      modified_substring = modified_substring.replace(/([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([ାିୀୁୂୃେୈୋୌଂଁ]*)}/g , "}$1$2ି");
      modified_substring = modified_substring.replace(/([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([୍])}/g , "}$1$2");
      modified_substring = modified_substring.replace(/}/g , "ର୍");
      modified_substring = modified_substring.replace(/ˆ/g , "ତ୍ତ");
    } // end of IF  statement  meant to  supress processing of  blank  string.
  } // end of the function  replace_symbols

} // end of convert_to_unicode function

//Gist to unicode conversion
function gist_to_unicode() {
  var conversion_array = new Array(
    "ÞÔ", "ÔÞ",
    "¼¼Ð" , " ।" ,
    "þ" , "" ,
    "Æ" , "" ,
    "¼" , "" ,
    "¤" , "" ,
    "¥" , "" ,
    "1" , "୧" , // numeric 1
    "2" , "୨" , // numeric 2
    "3" , "୩" , // numeric 3
    "4" , "୪" , // numeric 4
    "5" , "୫" , // numeric 5
    "6" , "୬" , // numeric 6
    "7" , "୭" , // numeric 7
    "8" , "୮" , // numeric 8
    "9" , "୯" , // numeric 9
    "0" , "୦" , // numeric 0

    // vowel
    "@" , "ଅ" , // a
    "A" , "ଆ" , // aa
    "B" , "ଇ" , // hraswa i
    "C" , "ଈ" , // dirgha i
    "D" , "ଉ" , // hraswa u
    "E" , "ଊ" , // dirgha U
    "H" , "ଏ" , // e
    "I" , "ଐ" , // ai
    "J" , "ଓ" , // o
    "K" , "ଔ" , // au
    "F" , "ଋ" , // ru
    "G" , "ୠ" , // dirgha ru


    // consonents
    "L" , "କ" , // ka
    "M" , "ଖ" , // kha
    "N" , "ଗ" , // ga
    "O" , "ଘ" , // gha
    "P" , "ଙ" , // gNy (una)
    "Q" , "ଚ" , // ca
    "R" , "ଛ" , // cha
    "S" , "ଜ" , // ja
    "T" , "ଝ" , // jha
    "U" , "ଞ" , // GnY (nya)
    "V" , "ଟ" , // Ta
    "W" , "ଠ" , // Tha
    "XÏ" , "ଡ଼" , // Da/rha
    "X" , "ଡ" , // Da
    "YÏ" , "ଢ଼" , // rha/Dha
    "Y" , "ଢ" , // Dha
    "Z" , "ଣ" , // Na
    "\[" , "ତ" , // ta
    "\\" , "ଥ" , // tha
    "\]" , "ଦ" , // da
    "\^" , "ଧ" , // dha
    "\_" , "ନ" , // na
    "\`" , "ପ" , // pa
    "a" ,  "ବ" , // ba
    "b" , "ଭ" , // bha
    "c" , "ମ" , // ma
    "d" , "ଯ" , // ja/ya (antastha)
    "\¯" , "ୟ" , // Ya
    " ̄", "ୟ" , // ya
    "e" , "ର" , // ra
    "m" , "ଲ" , // la
    "f" , "ଳ" , // La
    "g" , "ଵ" , // ba (abargya)
    "h" , "ଶ" , // Sa/sha (talabya/talavya)
    "i" , "ଷ" , // sha (murdhanya)
    "j" , "ସ" , // sa (batsya/dantya)
    "k" , "ହ" , // ha
    "l" , "କ୍ଷ" , // xa/kshya



    // phala
    "õ" , "୍ର" ,
    "ï" , "୍ନ" ,
    "ð" , "୍ନ" ,
    "á" , "୍ନ" ,
    "÷" , "୍ଭ" ,
    "ø" , "୍ଭ" ,
    "ë" , "୍ମ" ,
    "ê" , "୍ମ" ,
    "è" , "୍ୱ" ,
    "é" , "୍ୱ" , 
    "í" , "୍ଲ" ,
    "î" , "୍ଲ" ,
    "â" , "୍ଲ" ,
    "ì" , "୍ଳ" ,
    "Í" , "୍ର" ,
    "ö" , "୍ର" ,
    //"Ô" , "୍ୟ" , 


    // conjuncts
    // dwita
    "n" , "ଚ୍ଚ" , 
    "o" , "ଚ୍ଛ" ,
    "p" , "ଟ୍ଟ" ,
    "r" , "ତ୍ତ" ,
    "~" , "ଦ୍ଦ" ,
    "À" , "ଣ୍ଣ" ,
    //other conjuncts
    "q" , "ଞ୍ଚ" ,
    "\«" , "ନ୍ତ" ,
    "x" , "ନ୍ଥ" ,
    "t" , "ନ୍ଦ" ,
    "u" , "ନ୍ଧ" ,
    "¶" , "ଣ୍ଠ" ,
    " ̈" , "ଣ୍ଡ" , // NDa
    "%" , "ଞ୍ଝ" ,
    "+" , "ଙ୍ଘ" ,
    "<" , "ଙ୍ଖ" ,
    ">" , "ମ୍ଫ" ,
    "z" , "ବ୍ବ" ,
    "{" , "ଶ୍ଥ" ,
    "}" , "ଞ୍ଛ" ,
    "|" , "ଓଁ" ,
    "Æ" , "କ୍ଟ" ,
    "`ù" , "ତ୍ପ" ,
    "‘" , "ଗ୍ଧ" ,
    "’" , "ଗ୍ଦ" ,
    "“" , "ପ୍ପ" ,
    "”" , "ଡ୍ଗ" ,
    "•" , "ବ୍ଧ" ,
    "–" , "ଳ୍କ" ,
    "—" , "ତ୍ସ" , // tsa
    "#" , "ତ୍ସ" , // tsa
    "˜" , "୍ଳ" ,
    "™" , "ର୍ଁ" ,
    "š" , "୍ୱ" ,
    "›" , "୍ମ" ,
    "¡" , "ଭ୍ଭ" ,
    "£" , "କ୍କ" ,
    "¬" , "ଣ୍ଢ" ,
    "­" , "ମ୍ପ" ,
    "®" , "ମ୍ମ" ,
    "°" , "ଳ୍କ" ,
    "±" , "ସ୍ତ୍ର" ,
    "´" , "ଷ୍କ" ,
    "μ" , "କ୍ସ" , // ksa
    "·" , "ସ୍ଖ" ,
    "»" , "ଷ୍ଣ" ,
    "¿" , "ପ୍ପ" ,
    "Â" , "ଦ୍ଗ" ,
    "Ä" , "କ୍ଷ୍ଣ" ,
    "Å" , "ଡ୍ଡ" ,
    "Ç" , "ଳ୍ଫ" ,
    "È" , "ଷ୍ଫ" ,
    "É" , "ସ୍ଫ" ,
    "s" , "ଜ୍ଞ" ,
    "v" , "ବ୍ଦ" ,
    "w" , "ଦ୍ଧ"  ,
    "y" , "ସ୍ଥ" ,
    "¢" , "କ୍ଲ" ,
    "²" , "ସ୍କ" ,
    "ª" , "ସ୍ତ" ,
    "\¦" , "କ୍ତ" ,
    "§" , "ନ୍ତ୍ର" ,
    "³" , "ଜ୍ଜ" ,
    "©" , "ପ୍ତ" ,
    "\=" , "ଙ୍ଗ" ,
    " ଙ୍ଗ " , "\ = " , // Equal Sign
    "\*" , "ଙ୍କ" ,
    "\&" , "ଞ୍ଜ" ,
    "\$" , "ଫ" ,
    "Ã" , "ଣ୍ଟ" ,
    "½" , "ଷ୍ଟ" ,
    "¾" , "ଶ୍ଚ" ,
    "º" , "ଷ୍ଠ" ,
    "Á" , "ଳ୍ପ" ,
    "¹" , "ଷ୍ପ" ,
    //"\¸" , "ସ୍ପ" , // spa
    " ̧" , "ସ୍ପ" , // spa
    "ƒ" , 'ମ୍ପ' ,// mpa
    "„" , 'ମ୍ପ' ,// mpa
    "†", "ପ୍ଟ", // pta
    "œ", "କ୍ଟ", // kta

    // matra
    "Ð" , "ା" , // aa kara
    "Þ" , "ି" , // hraswa i kara 
    "Ù" , "ିà" , // hraswa i kara  
    "Ñ" , "ୀ" , // dirgha i kara
    "Ê" , "ୁ" , // hraswa u kara 
    "ã" , "ୁ" , // hraswa u kara 
    "ä" , "ୁ" , // hraswa u kara 
    "Ë" , "ୂ" , // dirgha u kara
    "å" , "ୂ" , // dirgha u kara
    "æ" , "ୂ" ,  // dirgha u kara
    "Ì" , "ୃ" , // ru kara
    "ó" , "ୃ" , // ru kara
    "ô" , "ୃ" ,  // ru kara
    "Ö" , "ଂ" ,  // anuswara
    "Õ" , "ଂ" , // anuswara
    "Ü" , "ଁ" , // candrabindu
    "Û" , "ଁ" , // candrabindu
    "Ý" , "ଁ" , // candrabindu
    "Ú" , "ିଁ" , // candrabindu
    "Ó" , "ଃ" , // bisarga (visarga)
    "ç" , "୍‍" , // halanta with ZWJ


    // additionals
    "û" , "୰" ,
    "ý" , "୍ଳ" ,
    "Î" , "ଽ" ,
    "Ï" , "଼" ,
    "ଧù" , "ଧି" ,
    "ପú" , "ତ୍ପ" ,
    "‡", "ୁ", 
    "…" , "ଣ୍ଠ" // NTha
    //"" , "",
    //"" , ""
  );
  var conversion_array_length = conversion_array.length;
  var modified_substring = document.getElementById("input_text").value;  
  var text_size = modified_substring.length;
  var processed_text = '';  //blank
  var position1 = 0;
  var position2 = 0;
  var process_queue = 1;
  var chunk_size = 10000; // this character long text will be processed in one go.
  while (process_queue == 1) {
    position1 = position2;
    if (position2 < (text_size - chunk_size)) {
      position2 +=  chunk_size;
    } else {
      position2 = text_size;
      process_queue = 0;
    }
    var modified_substring = document.getElementById("input_text").value.substring (position1, position2);
    replace_symbols();
    var processed_text = processed_text + modified_substring;
    document.getElementById("unicode_text").value = "Conversion in progress.." + '\n\n' + 'Conversion of ' + position2 + ' charecters out of ' + text_size + ' completed.'; 
  }
  document.getElementById("unicode_text").value = processed_text;
  select_and_copy();
  function replace_symbols() {
    if (modified_substring != "") {
      for (conversion_character_index = 0;   conversion_character_index < conversion_array_length-1;    conversion_character_index = conversion_character_index + 2) {
        index = 0;  // index of the symbol being searched for replacement
        while (index != -1) {
          modified_substring = modified_substring.replace(conversion_array[ conversion_character_index ] , conversion_array[conversion_character_index+1])
          index = modified_substring.indexOf(conversion_array[conversion_character_index])
        } // end of while-00 loop
      } // end of for loop
      // see if the following needs to include more letters than  [କସ]
      modified_substring = modified_substring.replace(  /([କସ])([ú])/g , "ତ୍$1");
      // following statements for adjusting position of e, ai, o and au maatraas.
      modified_substring = modified_substring.replace(  /([Ò])([କଖଗଘଙଚଛଜଝଞଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳୱଶଷସହକ୍ଷଜ୍ଞୟ])/g , "$2$1");
      modified_substring = modified_substring.replace(/([Ò])([୍])([କଖଗଘଙଚଛଜଝଞଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳୱଶଷସହକ୍ଷଜ୍ଞୟ])/g , "$2$3$1");
      modified_substring = modified_substring.replace(/([Ò])([୍])([କଖଗଘଙଚଛଜଝଞଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳୱଶଷସହକ୍ଷଜ୍ଞୟ])/g , "$2$3$1");
      modified_substring = modified_substring.replace(/Òß/g  ,  "ୈ");
      modified_substring = modified_substring.replace(/Òା/g  ,  "ୋ");
      modified_substring = modified_substring.replace(/Ò×/g  ,  "ୌ");
      modified_substring = modified_substring.replace(/Ò/g   ,  "େ");
      //following three statement for adjusting position of reph ie, half r .
      modified_substring = modified_substring.replace(/([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳୱଶଷସହକ୍ଷଜ୍ଞୟ])([ାିୀୁୂୃେୈୋୌଂଁ]*)à/g , "à$1$2");
      modified_substring = modified_substring.replace(/([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳୱଶଷସହକ୍ଷଜ୍ଞୟ])([୍])à/g , "à$1$2");
      modified_substring = modified_substring.replace(/à/g , "ର୍");
      modified_substring = modified_substring.replace(/([ଂଁ])([ାିୀୁୂୃେୈୋୌ])/g , "$2$1");
      // new added features...
      modified_substring = modified_substring.replace(/([୧୨୩୪୫୬୭୮୯୦])([ା।])([୧୨୩୪୫୬୭୮୯୦])/g , "$1|$3"); // news paper style
      modified_substring = modified_substring.replace(/([ାିୀୁୂୃେୈୋୌ])([Ô])/g , "$2$1");
      modified_substring = modified_substring.replace(/Ô/g , "୍ୟ");
      modified_substring = modified_substring.replace(/େ୍ୱ/g , "୍ୱେ");
      //exceptions...
      modified_substring = modified_substring.replace(/ଦ୍ଧ୍ୱର୍/g , "ର୍ଦ୍ଧ୍ୱ");
    } // end of IF  statement  meant to  suppress processing of  blank  string.
  } // end of the function  replace_symbols
} // end of convert_to_unicode function

//Apranta Conersion code
function apranta_to_unicode() {
  var conversion_array = new Array(
    "ê" , " ।" ,
    "ÿ" , "" , //blank
    "􀃛" , "" ,
    "ç§" , "§ç" ,
    "􀁞" , "{" ,
    "{ç " , "ç{" ,
    "{ç" , "ç{" ,
    " {# " , "#{" ,
    "{#" , "#{" ,
    //"¿â" , "â¿" ,
    "􀀃" , " " ,
    "  " , " " ,
    "ü" , "‌" , // zero width non joiner
    "ý" , "‌" , // zero width non joiner

    "1" , "୧" ,
    "2" , "୨" ,
    "3" , "୩" ,
    "4" , "୪" ,
    "5" , "୫" ,
    "6" , "୬" ,
    "7" , "୭" ,
    "8" , "୮" ,
    "9" , "୯" ,
    "0" , "୦" ,


    "b" , "ଚ୍ଛ" ,
    //" , "ଟ୍ଟ" ,
    "􀁲" , "ଦ୍ଦ" ,
    //"􀁪" , "ତ୍ମ" ,
    "􀁧" , "ତ୍କ" ,
    "􀁩" , "ତ୍ତ୍ଵ" ,
    //"½" , "୍ମ" ,
    "􀁵" , "ଦ୍ଭ" , // dbha


    "s" , "ମ୍ପ" , //mpa
    //"" , "ମ୍ଫ" , // mpha
    //"¼" , "ମ୍ମ" , //mma


    "Ú" , "ା" , // aa kara
    "Í" , "ୟ" , // ya
    "O" , "କ୍ସ" ,
    "Ð" , "ଷ୍ଣ" ,
    "À" , "ର" ,
    "Ñ" , "ଲ" ,
    "Ø" , "ହ" ,
    "o" , "ତ୍ତ" ,

    "³" , "କ" , // ka
    "´" , "ଖ" , // kha
    "µ" , "ଗ" , // ga
    "W" , "ଘ" , // gha
    "¸" , "ଚ" , // ca
    "p" , "ଚ୍ଚ" , // cc - dwitia
    "¹" , "ଛ" , // cha
    "º" , "ଜ" , // ja

    "l" , "ଝ" , // jha

    "½" , "ଟ" , // Ta
    "¾" , "ଠ" , // Tha
    //"" , "ଡ଼" , // Da (bindu)
    "¿" , "ଡ" , // Da
    //"" , "ଢ଼" , // Dha bindu
    "|" , "ଢ" , // Dha
    "Á" , "ଣ" , // Na
    "Ù" , "ଣ୍ଣ" , // NNa

    "Â" , "ତ" , // ta
    //"†" , "ତ" , //ta
    "Ã" , "ଥ" , // tha
    "Ä" , "ଦ" , // da
    //"" , "ଦ" , // da
    "Å" , "ଧ" , // dha
    "TM" , "ଧ" , // dha
    "™" , "ଧ" , // dha (new)
    "􀁺" , "ନ" , // na
    "œ" , "ନ" , // na - new

    //"" , "ଫ" , // pha
    "Ê" ,  "ବ" , // ba
    "Ë" , "ଭ" , // bha
    //"" , "ଭ" , // bha
    "Ì" , "ମ" , // ma
    //"􀃚" , "ମ" , // ma
    "Î" , "ଯ" , // ja - antastha
    "Ò" , "ଳ" , // La
    "Õ" , "ଶ" , // Sa talabya
    "􀂥" , "ଶ" , // Sa talabya
    "Ö" , "ଷ" , // Sa murdhanya
    //"Ó" , "ସ" , // Sa
    "²" , "କ୍ଷ" , // khya
    //"" , "ଜ୍ଞ" , // Gya

    // conjunct juktakhara"

    //"" , "ଞ୍ଚ" , // nca
    //"" , "ଞ୍ଛ" , // ncha
    "j" , "ନ୍ଦ" , // nda
    "£" , "ନ୍ଦ" , // nda
    //"" , "ନ୍ଧ" , // ndha
    "ƒ" , "ଣ୍ଡ" , // nDa
    "ó" , "୍ବ" , //mba
    "»" , "ମ୍ଭ" , // mbh
    //"" , "ବ୍ଦ" , // bda
    "􀁳" , "ଦ୍ଧ" , // bdha
    //"", "ବ୍ଧ" , // bdha

    //"" , "ନ୍ଥ" , // nth
    "×" , "ସ" , // sa
    "ô" , "୍ନ" , //nn

    "􀁸" , "ଧ୍ୟ" , // dhya
    "š" , "ଧ୍ୟ" , // dhya

    //"ø" , "÷ë" ,
    "÷" , "୍ୟ" , // reph
    //"" , "୍ୟ" , // ja phala 
    //"" , "୍ୱ" , // ba phala
    " ́" , "୍ୱ" , // ba phala
    "Ô" , "ସ୍କ" , // ska
    "ö" , "୍ଥ" , // tha phala
    "§" , "୍ନ" , // na phala
    "u" , "ଫ" ,  // Ta phala
    //"Û" , "୍ସ" , // sa phala
    "õ" , "୍ର" , // ra phala
    "I" , "୍ର" , // ra phala
    "Ÿ" , "ନ୍ନ" , // nna
    "•" , "ଦ୍ଧ" , // ddha
    //"ˆ" , "ତ୍ତ" , // tta
    "~" , "ଣ୍ଡ" , // NDa
    //" ß" , "ୟ" , // ya
    //"ß" , "ୟ" , // ya
    "„" , "ସ୍ତ" , // sta
    "¥" , "କ୍ତ" , // kta
    "ã" , "ନ୍ତ୍ର" , // ntr
    "g" , "ଜ୍ଜ" , // jja
    //"©" , "ପ୍ତ" , // pta
    "‡" , "ତ୍କ" , //tka
    //"Š" , "ତ୍ମ" , //tma
    "‚" , "ନ୍ତ" , // nta
    "t" , "ଙ୍କ" ,
    "\\" , "ଙ୍ଖ" , // nkha
    "\è" , "ଙ୍ଗ" , // nga
    "q" , "ଞ୍ଜ" , // nja
    "a" , "ଷ୍ଟ" , // STa
    "c" , "ଷ୍ଠ" , // shtha
    //"" , "ଶ୍ଚ" , // Sca
    "Ï" , "ର" , // ra
    //"" , "ଳ୍ପ" , // Lpa
    //"" , "ଷ୍ପ" , // Spa murdhanya
    //"" , "ସ୍ପ" , // spa

    "Æ" , "ନ" , // na
    //"" , "ା" , // aa kara
    //"􀃂" , "ା" , // aa kara
    "Û" , "ି" , // i kara
    //"ÿ]" , "ିଁ" , // i kara
    "ç" , "ି" , // i kara
    "􀃃" , "ି" , // i kara
    "#" , "ି" , // i kara
    "Ü" , "ୀ" , // I kara

    "Ý" , "ୁ" , // u kara - hraswa
    "A" , "ୁ" , // u kara - hraswa
    "Þ" , "ୂ" , // u kara - dirgha
    "ß" , "ୃ" , // R kara
    "¡" , "ଁ" , // candrabindu
    "􀁥" , "ଃ" , // bisarga
    "…" , "ଃ" , // bisarga
    "ú" , "୍" , // halanta

    "¢" , "ଂ" , // anuswara
    "]" , "ିଁ" , // i kara
    "ñ" , "୍ଲ" , // la
    "È" , "ପ" , // La
    "úÿ" , "୍‌" , //ka halanta zero-width non joiner

    "¤" , "ଅ" , // a
    "􀀤" , "ଅ" , // a
    //"ଅା" , "ଆ" , // aa
    //"" , "ଆ" , // aa
    "¦" , "ଇ" , // i
    "􀀥" , "ଇ" , // i
    "C" , "ଈ" , // i dirgha
    "¨" , "ଉ" , // u
    "􀀧" , "ଉ" , // u
    "E" , "ଊ" , // U
    "J" , "ଋ" , // R
    "¬" , "ଏ" , // e
    "G" , "ଐ" , // ai
    "􀀪" , "ଐ" , // ai
    "°" , "ଓ" , // o
    "±" , "ଔ"     // au
  );
  var conversion_array_length = conversion_array.length;
  var modified_substring = document.getElementById("input_text").value;  
  var text_size = modified_substring.length;
  var processed_text = '';  //blank
  var position1 = 0;
  var position2 = 0;
  var process_queue = 1;
  var chunk_size = 10000; // this charecter long text will be processed in one go.
  while (process_queue == 1) {
    position1 = position2;
    if (position2 < (text_size - chunk_size)) {
      position2 +=  chunk_size;
    } else {
      position2 = text_size;
      process_queue = 0;
    }
    var modified_substring = document.getElementById("input_text").value.substring (position1, position2);
    replace_symbols();
    var processed_text = processed_text + modified_substring;
    document.getElementById("unicode_text").value = "Conversion in progress.." + '\n\n' + 'Conversion of ' + position2 + ' charecters out of ' + text_size + ' completed.'; 
  }
  document.getElementById("unicode_text").value = processed_text;
  select_and_copy();
  function replace_symbols() {
    if (modified_substring != "") {
      for (conversion_character_index = 0;   conversion_character_index < conversion_array_length-1;    conversion_character_index = conversion_character_index + 2) {
        index = 0;  // index of the symbol being searched for replacement
        while (index != -1) {
          modified_substring = modified_substring.replace(conversion_array[ conversion_character_index ] , conversion_array[conversion_character_index+1])
          index = modified_substring.indexOf(conversion_array[conversion_character_index])
        } // end of while-00 loop
      } // end of for loop
      // see if the following needs to include more letters than  [କସ]
      //modified_substring = modified_substring.replace(  /([କସ])([ú])/g , "ତ୍$1");
      // following statements for adjusting postion of e, ai, o and au matras.
      modified_substring = modified_substring.replace(  /([á])([କଖଗଘଙଚଛଜଝଞଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])/g , "$2$1");
      modified_substring = modified_substring.replace(/([á])([୍])([କଖଗଘଙଚଛଜଝଞଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])/g , "$2$3$1");
      modified_substring = modified_substring.replace(/([á])([କଖଗଘଙଚଛଜଝଞଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])/g , "$2$1");
      modified_substring = modified_substring.replace(/áð/g  ,  "ୈ");
      //modified_substring = modified_substring.replace(/áା/g  ,  "ୋ");
      //modified_substring = modified_substring.replace(/áæ/g  ,  "ୌ");
      modified_substring = modified_substring.replace(/á/g   ,  "େ");
      //following three statement for adjusting position of reph ie, half r .
      modified_substring = modified_substring.replace(/([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([ାିୀୁୂୃେୈୋୌଂଁ]*)û/g , "û$1$2");
      modified_substring = modified_substring.replace(/([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([୍])û/g , "û$1$2");
      modified_substring = modified_substring.replace(/û/g , "ର୍");
      modified_substring = modified_substring.replace(/([ଂଁ])([ାିୀୁୂୃେୈୋୌ])/g , "$2$1");
      //following three statement for adjusting position of reph and i .
      modified_substring = modified_substring.replace(/([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([ାିୀୁୂୃେୈୋୌଂଁ]*)}/g , "}$1$2ି");
      modified_substring = modified_substring.replace(/([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([୍])}/g , "}$1$2ି");
      modified_substring = modified_substring.replace(/}/g , "ର୍");
    } // end of IF  statement  meant to  supress processing of  blank  string.

  } // end of the function  replace_symbols

} // end of convert_to_unicode function

//Sambad EML conversion code
function sambad_eml_to_unicode() {
  var conversion_array = new Array(
    "ÞÔ", "ÔÞ",
    "¼¼Ð" , " ।" ,
    "þ" , "" ,
    "Æ" , "" ,
    "¼" , "" ,
    "¤" , "" ,
    "¥" , "" ,
    "1" , "୧" , // numeric 1
    "2" , "୨" , // numeric 2
    "3" , "୩" , // numeric 3
    "4" , "୪" , // numeric 4
    "5" , "୫" , // numeric 5
    "6" , "୬" , // numeric 6
    "7" , "୭" , // numeric 7
    "8" , "୮" , // numeric 8
    "9" , "୯" , // numeric 9
    "0" , "୦" , // numeric 0

    // vowel
    "@" , "ଅ" , // a
    "@Ð" , "ଆ" , // aa
    "A" , "ଆ" , // aa       
    "B" , "ଇ" , // hraswa i
    "Ñ" , "ୀ" , // dirgha i
    "D" , "ଉ" ,  // hraswa u
    "E" , "ଊ" , // dirgha U
    "H" , "ଏ" , // e
    "I" , "ଐ" , // ai
    "J" , "ଓ" , // o
    "K" , "ଔ" , // au
    "F" , "ଋ" , // ru
    "G" , "ୠ" , // dirgha ru


    // consonents
    "d" ,  "ଯ" , // antastha
    "a" , "ବ" , // ba 
    "[" , "ତ" , // ta
    "*" ,  "ଙ୍କ" , // nku
    "õ" , "୍ର" , //
    "[" , "ତ" , //
    "Ð" , "ା" , //


    "L" , "କ" , // ka
    "M" , "ଖ" , // kha
    "N" , "ଗ" , // ga
    "O" , "ଘ" , // gha
    "P" , "ଙ" , // gNy (una)
    "Q" , "ଚ" , // ca
    "R" , "ଛ" , // cha
    "S" , "ଜ" , // ja
    "T" , "ଝ" , // jha
    "U" , "ଞ" , // GnY (nya)
    "V" , "ଟ" , // Ta
    "W" , "ଠ" , // Tha
    "XÏ" , "ଡ଼" , // Da/rha
    "X" , "ଡ" , // Da
    "YÏ" , "ଢ଼" , // rha/Dha
    "Y" , "ଢ" , // Dha
    "Z" , "ଣ" , // Na
    "\[" , "ତ" , // ta
    "\\" , "ଥ" , // tha
    "]" , "ଦ" , // da
    "\^" , "ଧ" , // dha
    "\_" , "ନ" , // na
    "`" , "ପ" , // pa
    "$", "ଫ" , // pha/fa
    "D" ,  "ବ" , // ba
    "b" , "ଭ" , // bha
    "c" , "ମ" , // ma
    "d" , "ଯ" , // ja/ya (antastha)
    "\¯" , "ୟ" , // Ya
    " ̄", "ୟ" , // ya
    "e" , "ର" , // ra
    "m" , "ଲ" , // la
    "f" , "ଳ" , // La
    "g" , "ଵ" , // ba (abargya)
    "h" , "ଶ" , // Sa/sha (talabya/talavya)
    "i" , "ଷ" , // sha (murdhanya)
    "j" , "ସ" , // sa (batsya/dantya)
    "k" , "ହ" , // ha
    "l" , "କ୍ଷ" , // xa/kshya



    // phala
    "õ" , "୍ର" ,
    "ï" , "୍ନ" ,
    "ð" , "୍ନ" ,
    "á" , "୍ନ" ,
    "÷" , "୍ଭ" ,
    "ø" , "୍ଭ" ,
    "ë" , "୍ମ" ,
    "ê" , "୍ମ" ,
    "è" , "୍ୱ" ,
    "é" , "୍ୱ" , 
    "í" , "୍ଲ" ,
    "î" , "୍ଲ" ,
    "â" , "୍ଲ" ,
    "ì" , "୍ଳ" ,
    "Í" , "୍ର" ,
    "ö" , "୍ର" ,
    "Ô" , "୍ୟ" , // ja/ya phala


    // conjuncts
    // dwita
    "n" , "ଚ୍ଚ" , 
    "o" , "ଚ୍ଛ" ,
    "p" , "ଟ୍ଟ" ,
    "r" , "ତ୍ତ" ,
    "~" , "ଦ୍ଦ" ,
    "À" , "ଣ୍ଣ" ,
    //other conjuncts
    "q" , "ଞ୍ଚ" ,
    "«" , "ନ୍ତ" ,
    "x" , "ନ୍ଥ" ,
    "t" , "ନ୍ଦ" ,
    "u" , "ନ୍ଧ" ,
    "¶" , "ଣ୍ଠ" ,
    "¨" , "ଣ୍ଡ" , // NDa
    "%" , "ଞ୍ଝ" ,
    "+" , "ଙ୍ଘ" ,
    "<" , "ଙ୍ଖ" ,
    ">" , "ମ୍ଫ" ,
    "z" , "ବ୍ବ" ,
    "{" , "ଶ୍ଥ" ,
    "}" , "ଞ୍ଛ" ,
    "|" , "ଓଁ" ,
    "Æ" , "କ୍ଟ" ,
    "`ù" , "ତ୍ପ" ,
    "‘" , "ଗ୍ଧ" ,
    "’" , "ଗ୍ଦ" ,
    "“" , "ପ୍ପ" ,
    "”" , "ଡ୍ଗ" ,
    "•" , "ବ୍ଧ" ,
    "–" , "ଳ୍କ" ,
    "—" , "ତ୍ସ" , // tsa
    "#" , "ତ୍ସ" , // tsa
    "˜" , "୍ଳ" ,
    "™" , "ର୍ଁ" ,
    "š" , "୍ୱ" ,
    "›" , "୍ମ" ,
    "¡" , "ଭ୍ଭ" ,
    "£" , "କ୍କ" ,
    "¬" , "ଣ୍ଢ" ,
    "­" , "ମ୍ପ" ,
    "®" , "ମ୍ମ" ,
    "°" , "ଳ୍କ" ,
    "±" , "ସ୍ତ୍ର" ,
    "´" , "ଷ୍କ" ,
    "μ" , "କ୍ସ" , // ksa
    "·" , "ସ୍ଖ" ,
    "»" , "ଷ୍ଣ" ,
    "¿" , "ପ୍ପ" ,
    "Â" , "ଦ୍ଗ" ,
    "Ä" , "କ୍ଷ୍ଣ" ,
    "Å" , "ଡ୍ଡ" ,
    "Ç" , "ଳ୍ଫ" ,
    "È" , "ଷ୍ଫ" ,
    "É" , "ସ୍ଫ" ,
    "s" , "ଜ୍ଞ" ,
    "v" , "ବ୍ଦ" ,
    "w" , "ଦ୍ଧ"  ,
    "y" , "ସ୍ଥ" ,
    "¢" , "କ୍ଲ" ,
    "²" , "ସ୍କ" ,
    "ª" , "ସ୍ତ" ,
    "\¦" , "କ୍ତ" ,
    "§" , "ନ୍ତ୍ର" ,
    "³" , "ଜ୍ଜ" ,
    "©" , "ପ୍ତ" ,
    "\=" , "ଙ୍ଗ" ,
    " ଙ୍ଗ " , "\ = " , // Equal Sign
    "\*" , "ଙ୍କ" ,
    "\&" , "ଞ୍ଜ" ,
    "\$" , "ଫ" ,
    "Ã" , "ଣ୍ଟ" ,
    "½" , "ଷ୍ଟ" ,
    "¾" , "ଶ୍ଚ" ,
    "º" , "ଷ୍ଠ" ,
    "Á" , "ଳ୍ପ" ,
    "¹" , "ଷ୍ପ" ,
    //"\¸" , "ସ୍ପ" , // ପ
    "¸" , "ସ୍ପ" , // spa
    "ƒ" , 'ମ୍ପ' ,// mpa
    "„" , 'ମ୍ପ' ,// mpa
    "†", "ପ୍ଟ", // pta
    "œ", "କ୍ଟ", // kta

    // matra
    "Ð" , "ା" , // aa kara
    "Þ" , "ି" , // hraswa i kara
    "Ù" , "ିà" , // hraswa i kara  
    "Ñ" , "ୀ" , // dirgha i kara
    "Ê" , "ୁ" , // hraswa u kara 
    "Ê" ,  "ୁ" , // hraswa u kara
    "ã" , "ୁ" , // hraswa u kara 
    "ä" , "ୁ" , // hraswa u kara 
    "Ë" , "ୂ" , // dirgha u kara
    "å" , "ୂ" , // dirgha u kara
    "æ" , "ୂ" ,  // dirgha u kara
    "Ì" , "ୃ" , // ru kara
    "ó" , "ୃ" , // ru kara
    "ô" , "ୃ" ,  // ru kara
    "Ö" , "ଂ" ,  // anuswara
    "Õ" , "ଂ" , // anuswara
    "Ü" , "ଁ" , // candrabindu
    "Û" , "ଁ" , // candrabindu
    "Ý" , "ଁ" , // candrabindu
    "Ú" , "ିଁ" , // candrabindu
    "Ó" , "ଃ" , // bisarga (visarga)
    "ç" , "୍‍" , // halanta with ZWJ


    // additionals
    "û" , "୰" ,
    "ý" , "୍ଳ" ,
    "Î" , "ଽ" ,
    "Ï" , "଼" ,
    "ଥù" , "ଥି" ,
    "ଧù" , "ଧି" ,
    "ପú" , "ତ୍ପ" ,
    "‡", "ୁ", 
    "…" , "ଣ୍ଠ" // NTha
    //"" , "",
    //"" , ""
  );
  var conversion_array_length = conversion_array.length;
  var modified_substring = document.getElementById("input_text").value;
  var text_size = modified_substring.length;
  var processed_text = '';  //blank
  var position1 = 0;
  var position2 = 0;
  var process = 1;
  var chunk_size = 10000; // this character long text will be processed in one go.
  while (process == 1) {
    position1 = position2;
    if (position2 < (text_size - chunk_size)) {
      position2 +=  chunk_size;
    } else {
      position2 = text_size;
      process = 0;
    }
    var modified_substring = document.getElementById("input_text").value.substring (position1, position2);
    replace_symbols();
    var processed_text = processed_text + modified_substring;
    document.getElementById("unicode_text").value = "Conversion in progress.." + '\n\n' + 'Conversion of ' + position2 + ' charecters out of ' + text_size + ' completed.'; 
  }
  document.getElementById("unicode_text").value = processed_text;
  select_and_copy();
  function replace_symbols() {
    if (modified_substring != "") {
      for (conversion_character_index = 0;   conversion_character_index < conversion_array_length-1;    conversion_character_index = conversion_character_index + 2) {
        index = 0;  // index of the symbol being searched for replacement
        while (index != -1) {
          modified_substring = modified_substring.replace(conversion_array[ conversion_character_index ] , conversion_array[conversion_character_index+1])
          index = modified_substring.indexOf(conversion_array[conversion_character_index])
        } // end of while-00 loop
      } // end of for loop
      // see if the following needs to include more letters than  [କସ]
      modified_substring = modified_substring.replace(  /([କସ])([ú])/g , "ତ୍$1");
      // following statements for adjusting position of e, ai, o and au maatraas.
      modified_substring = modified_substring.replace(  /([Ò])([କଖଗଘଙଚଛଜଝଞଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳୱଶଷସହକ୍ଷଜ୍ଞୟ])/g , "$2$1");
      modified_substring = modified_substring.replace(/([Ò])([୍])([କଖଗଘଙଚଛଜଝଞଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳୱଶଷସହକ୍ଷଜ୍ଞୟ])/g , "$2$3$1");
      modified_substring = modified_substring.replace(/([Ò])([୍])([କଖଗଘଙଚଛଜଝଞଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳୱଶଷସହକ୍ଷଜ୍ଞୟ])/g , "$2$3$1");
      modified_substring = modified_substring.replace(/Òß/g  ,  "ୈ");
      modified_substring = modified_substring.replace(/Òା/g  ,  "ୋ");
      modified_substring = modified_substring.replace(/Ò×/g  ,  "ୌ");
      modified_substring = modified_substring.replace(/Ò/g   ,  "େ");
      //following three statement for adjusting position of reph ie, half r .
      modified_substring = modified_substring.replace(/([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳୱଶଷସହକ୍ଷଜ୍ଞୟ])([ାିୀୁୂୃେୈୋୌଂଁ]*)à/g , "à$1$2");
      modified_substring = modified_substring.replace(/([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳୱଶଷସହକ୍ଷଜ୍ଞୟ])([୍])à/g , "à$1$2");
      modified_substring = modified_substring.replace(/à/g , "ର୍");
      modified_substring = modified_substring.replace(/([ଂଁ])([ାିୀୁୂୃେୈୋୌ])/g , "$2$1");
      // new added features...
      modified_substring = modified_substring.replace(/([୧୨୩୪୫୬୭୮୯୦])([ା।])([୧୨୩୪୫୬୭୮୯୦])/g , "$1|$3"); // news paper style
      modified_substring = modified_substring.replace(/([ାିୀୁୂୃେୈୋୌ])([Ô])/g , "$2$1");
      modified_substring = modified_substring.replace(/Ô/g , "୍ୟ");
      modified_substring = modified_substring.replace(/େ୍ୱ/g , "୍ୱେ");
      //exceptions...
      modified_substring = modified_substring.replace(/ଦ୍ଧ୍ୱର୍/g , "ର୍ଦ୍ଧ୍ୱ");
      modified_substring = modified_substring.replace( 'ୁ୍ୟ' , "୍ୟୁ");
      modified_substring = modified_substring.replace( 'ି୍ୟ' , "୍ୟି");
    } // end of IF  statement  meant to  suppress processing of  blank  string.
  } // end of the function  replace_symbols
}

function select_and_copy() {
  unicode_text_button
  document.getElementById('unicode_text_button').value = "Converted and Copied";
  //select the converted text
  document.getElementById('unicode_text').select();
  //copy the selected text
  document.execCommand('copy');
}
