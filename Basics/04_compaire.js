// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
/* An equality check == and comparison < > <= >= 
works differntly. Comparisons convert null to a number treating it as 0. 
That's why (3) null>=0 is true and null >0 is false
*/
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === -> Strict check also check datatypes an also value.

console.log("2" === 2);