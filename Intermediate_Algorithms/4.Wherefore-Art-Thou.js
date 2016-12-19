function whatIsInAName(collection, source) {
// What's in a name?

// collection [{a: 1}, {a:1, b:2}, {a:1, b:2, c: 3}]
// source {a: 1, b: 2}

// function doAllKeysExist(obj, source) {
// return }

return collection.filter(function(obj) {
return Object.keys(source).reduce((result, key) => {
return result && (obj[key] == source[key]);
}, true)
}
);

}
// Only change code above this line

// for(var i=0; i < Object.keys(source).length; i++) {
// for(var j=0;...)
// obj[j]
// }

// var arr = [1,2,3,4,5]
// arr.slice(2).map

// Object.keys(source).map(obj) {
// obj
// }


whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
👍🏼 1
December 15, 2016
