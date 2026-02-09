// reverse a string which in arr: NOT A COMPLE STRING like e.g "Gaurav";
// reverse the string in place with same arr: with o(1) SC.

let a = ["G", "a", "u", "r", "a", "v"];

let length = a.length;
// console.log(length)
let halflength = Math.floor(length / 2);

for(let i=0; i<halflength; i++) {
    // let swapping
    let temp = a[i];
    a[i] = a[length-1-i];
    a[length-1-i] = temp
}
console.log(a)