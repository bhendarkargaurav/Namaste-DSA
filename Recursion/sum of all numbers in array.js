// sum of all numbers of array:
let arr = [3, 5, 12, 0, 4];
function sum(n) {
    if(n==0) return arr[0];

    return arr[n] + sum(n - 1);
}
console.log(sum(arr.length-1));



// let arr = [3, 5, 12, 0, 4];

// function sum(n) {
//     let isOdd = ((arr[n]) % 2 != 0);

//     if(n == 0) {
//         return isOdd ? arr[n]:0;
//     }

//     return ((isOdd ? arr[n]:0) + sum(n-1));

// }

// console.log(sum(arr.length-1));