
function uniteUnique(arr) {

  var singleArr;
  var arrArr = [].slice.call(arguments);
  return singleArr = arrArr.reduce(function(a, b) {
       return a.concat(b.filter(function(value){
          return a.indexOf(value) === -1;
       }));
   });
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
