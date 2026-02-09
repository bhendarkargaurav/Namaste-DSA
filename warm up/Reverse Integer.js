// revrse the integer should work for +ve and -ve
// 123 rev = 321   or -123 rev = -321

// function ReverseInt(num) {
//     let nCopy = num;
//     console.log("original number", nCopy);
//     let n = Math.abs(num);
//     let rev = 0;

//     while(n>0){
//         rem = n % 10;
//         rev = (10*rev) + rem;
//         n = Math.floor(n /10);
//     }
//     if(nCopy<0){
//         return -rev;
//     }
//     else{
//         return rev;
//     }

// }
// let num = 846676;
// let res = ReverseInt(num);
// console.log(res);




function ReverseInt(x) {
    let xCopy = x;

    x = Math.abs(x);

    let rev = 0;
    while(x>0) {
        let rem = (x % 10);
        rev = (10*rev + rem);
        x = Math.floor(x/10);
    }
    if(xCopy < 0) {
        return -rev;
    }
    else {
        return rev;
    }
}


let Intnum = 120;
let res = ReverseInt(Intnum);
console.log(res);