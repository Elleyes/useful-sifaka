function convertToRoman(num) {

var ones = num %10;
num -= ones;
var tens = num %100;
num -= tens;
var huns = num %1000;
num -= huns;
var thous = num %10000;
num -= thous;

arr = [thous, huns, tens, ones];

  arr = arr.filter(function(val){
    return val;
  });

str = arr.toString();


str = str.replace(1000,'M');
str = str.replace(2000,'MM');
str = str.replace(3000,'MMM');
str = str.replace(4000,'MMMM');
str = str.replace(5000,'MMMMM');
str = str.replace(6000,'MMMMMM');
str = str.replace(7000,'MMMMMMM');
str = str.replace(8000,'MMMMMMMM');
str = str.replace(9000,'MMMMMMMMM');

str = str.replace(100,'C');
str = str.replace(200,'CC');
str = str.replace(300,'CCC');
str = str.replace(400,'CD');
str = str.replace(500,'D');
str = str.replace(600,'DC');
str = str.replace(700,'DCC');
str = str.replace(800,'DCCC');
str = str.replace(900,'CM');

str = str.replace(10,'X');
str = str.replace(20,'XX');
str = str.replace(30,'XXX');
str = str.replace(40,'XL');
str = str.replace(50,'L');
str = str.replace(60,'LX');
str = str.replace(70,'LXX');
str = str.replace(80,'LXXX');
str = str.replace(90,'XC');

str = str.replace(1,'I');
str = str.replace(2,'II');
str = str.replace(3,'III');
str = str.replace(4,'IV');
str = str.replace(5,'V');
str = str.replace(6,'VI');
str = str.replace(7,'VII');
str = str.replace(8,'VIII');
str = str.replace(9,'IX');
str = str.replace(/\,/g,"");
  
return str;

}

//3999 = MMM CM XC IX
/*

//ALTERNATIVE:
var convert = function(num) {

  // Create arrays with default conversion with matching indices.
  var decimalValue = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var romanNumeral = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];

  // Create a copy of num to work on and an empty string variable for the final roman number
  var numCopy = num;
  var romanized = '';

  // While the decimal number is greater than 0,
  while (numCopy > 0) {
    // Loop through the indices of the decimalValue array.
    for (var index = 0; index < decimalValue.length; index++) {
      // Get the maximum decimal number less or equal then the decimal number.
      if (+decimalValue[index] <= numCopy && +decimalValue[+index + 1] > numCopy) {
        // Add the Roman numeral & decrease numCopy by the decimal equivalent.
        romanized += romanNumeral[index];
        numCopy -= decimalValue[index];
      }
    }
  }

  return romanized;
};
*/
convertToRoman(9);
