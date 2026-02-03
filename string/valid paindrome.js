// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.
// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

//leetcode 125

// 1. best upproch = Two Pointers:  o(n) & o(1)

// function isPalindrome(s) {
//     s = s.toLowerCase();
//     // console.log("lowercase String is", s);

//     let i = 0;
//     let j = s.length -1;

//     while(i < j) {
//         if(!s[i].match(/[a-z0-9]/i)) {
//             i++;
//         }
//         else if(!s[j].match(/[a-z0-9]/i)) {
//             j--;
//         }
//         else if(s[i] === s[j]) {
//             i++;
//             j--;
//         }
//         else {
//             return false;
//         }
//     }
//     return true;

// }

// let s = "A man, a plan, a canaal: Panama"
// let res = isPalindrome(s);
// console.log(res);



// 2. space complexit is 0(n) & t.c is(n)
function isPalindrome(s) {
    s = s.toLowerCase();

    let filterdString = "";

    for(let i=0; i<s.length; i++){
        if(s[i].match(/[a-z0-9]/i)) {
            filterdString = filterdString + s[i];
        }
    }
    let rev = filterdString.split(" ").reverse().join(" ");
    return filterdString === rev;

}

let s = "A man, a plan, a canal: Panama"
let res = isPalindrome(s);
console.log(res);