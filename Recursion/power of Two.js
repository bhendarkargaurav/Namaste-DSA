// find a given number n is a power of two or not.

let n = 16          // 5 is not power of two so its false
function powerOdfTwo(n) {
    if (n==1) return true;
    if((n % 2 != 0) || n<1) return false;

    return powerOdfTwo(n/2);
}
console.log(powerOdfTwo(n));