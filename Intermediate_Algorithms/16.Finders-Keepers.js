
function findElement(arr, func) {
  var num = 0;
  num = arr.filter(func);

  return num[0];
}

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });
