function sumAll(arr) {
  var totalArray = [];
  for (i=Math.min.apply(null,arr); i<=Math.max.apply(null,arr); i++){
    totalArray.push(i);
  }
  return totalArray.reduce(function(a, b) {
    return a + b;
   }, 0);
}


sumAll([5, 10]);
