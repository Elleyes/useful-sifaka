function fearNotLetter(str) {
//   var newStr = "";
  for (i=0; i<str.length; i++) {
    num = str.charCodeAt(i);
    if(num !== str.charCodeAt(0) + i){
      return String.fromCharCode(num-1);
    }
  }
  return undefined;
}


fearNotLetter("abce");
