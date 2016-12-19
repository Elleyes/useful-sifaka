
function translatePigLatin(str) {
  var pigLatin = '';
  var regex = /[aeiou]/gi;
  if (str[0].match(regex)) {
    pigLatin = str + 'way';
  }
  else {
    var beforeVowel = str.indexOf(str.match(regex)[0]);
    pigLatin = str.substr(beforeVowel) + str.substr(0,beforeVowel) + "ay";
  }
  return pigLatin;
}


translatePigLatin("ove");
