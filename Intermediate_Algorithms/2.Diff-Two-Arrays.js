function diffArray(arr1, arr2) {
  var totalArray = arr1.concat(arr2);
  return totalArray.filter(function(val){
   return totalArray.indexOf(val) === totalArray.lastIndexOf(val);
});
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
