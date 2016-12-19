
function myReplace(str, before, after) {
    if (before.match(/[A-Z]/g)) {
       after = after[0].toUpperCase() + after.substring(1);
    }
    return str.replace(before, after);
}
  
myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
