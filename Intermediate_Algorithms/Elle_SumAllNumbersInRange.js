function sumAll(arr) {

  // call the function Math.max, passing it 2 arguments,
  // This is to find which is of the 2 numbers is higher.
  // Put that higher value into the variable named "maximum".
  // The 2 arguments we pass Math.max are the first 2 elements of arr.
  var maximum = Math.max(arr[0], arr[1]);

  // same as above, but getting the lower number into "minimum".
  var minimum = Math.min(arr[0], arr[1]);

  var accumulator = 0; // We will gather the answer into a variable named "accumulator".

  // Loop over every number in between (and including) minimum and maximum
  for ( var i = minimum; i <= maximum; i++ ) {

    // Add this number to the accumulator.
    accumulator += i;
  }

  // return the answer.
  return accumulator;
}
