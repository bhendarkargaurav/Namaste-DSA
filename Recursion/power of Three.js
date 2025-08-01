// is the given number is a power of 3

let n = 27   // 0 is false
function isPowerOfThree(n) {
    if(n==1) return true;
    else if(n<1) return false;
    return isPowerOfThree(n/3);
}

console.log(isPowerOfThree(n));