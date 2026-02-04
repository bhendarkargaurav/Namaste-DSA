
function countDigit(n) {
    if(n === 0) return 0;

    n = Math.abs(n);

    let count = 0;
    while(n>0) {
        n = Math.floor(n/10);  //remove last digit a
        count++;
    }
    return count;
}

let num = -876575;
let res = countDigit(num);
console.log(res);













function CountDigit(n) {
    if(n===0) return 0;

    n = Math.abs(n);      // convert -ve to +ve;

    let count =0;
    while(n>0) {
        n = Math.floor(n/10);   
        count++;
    }
    return count;
}



let number = 87653835387663;
let result = CountDigit(number);
console.log(result);