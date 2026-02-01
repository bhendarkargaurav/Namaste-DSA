// how it work

// rev = 43
// rem = 2
// rev = (10 * 43) + 2
// rev = 430 + 2
// rev = 432
// reversing is imp part


// function isPalindrom(x){
//     if(x<0){
//         return false
//     }
//     let xCopy = x

//     let rev = 0;
//     while(x > 0){
//         let rem = x % 10;          // get last digit
//         rev = (10*rev) + rem;   // shift rev left & add digit
//         x = Math.floor(x / 10); // remove last digit from x
//     }

//     if(xCopy===rev) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

function isPalindrom(x) {
    // the basic rule of dsa is to think about
    // its corner cases 

    if(x<0) {
        return false;
    }

    let xCopy = x;

    let rev = 0;
    while(x>0) {
        let rem = x%10;  // get the last digit
        rev = (10*rev) + rem;    
        x = Math.floor(x/10) // remoeve the last digit 
    }

    // first way
    // return xCopy === rev;

    //second way 
    return xCopy === rev ? true : false;

    // if(xCopy === rev) {
    //     return true
    // }
    // return false;
}



let num = 121;
let res = isPalindrom(num);
console.log(res);
