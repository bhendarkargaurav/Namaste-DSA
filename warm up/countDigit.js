
// function countDigit(n) {

//     if(n==0) return 1;

//     n = Math.abs(n);

//     let count = 0;
//     while(n>0) {
//         n = Math.floor(n / 10);
//         count++
//     }
//     return count;
// }


// let num = -8765757;
// let res = countDigit(num);
// console.log(res);


function countDigit(n) {
    if(n==0) return 0;

    let count = 0;
    while(n>0){
        n = Math.floor(n/10);
        count++;
    }
    return count;
}
let num = 578137635;
let res = countDigit(num);
console.log(res);