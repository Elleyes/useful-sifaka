function pairElement(str) {
  var arr = str.split('');
  var newArr = [];
  for (i=0; i<arr.length; i++){
     var arrArr = arr.slice(i, i+1);
        if (arr[i] === "G") {
            arrArr.push("C");
        } else if (arr[i]  === "C") {
            arrArr.push("G");
        } else if (arr[i]  === "A") {
            arrArr.push("T");
        } else if (arr[i]  === "T"){
            arrArr.push("A");
        }
     newArr.push(arrArr);
  }
  return newArr;
}
pairElement("AGCG");
