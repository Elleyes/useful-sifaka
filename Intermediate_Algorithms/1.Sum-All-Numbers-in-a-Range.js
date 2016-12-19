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

/Jacky
function sumAll(arr) {


    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var sum = 0;
    for (var i=min; i <= max; i++){
        sum += i;

    }
    return(sum);
}

sumAll([1, 4]);
