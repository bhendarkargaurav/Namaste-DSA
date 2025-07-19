
function isPalindrom(x){
    if(x<0){
        return false
    }
    let xCopy = x

    let rev = 0;
    while(x > 0){
        rem = x % 10;
        rev = (10*rev) + rem;
        x = Math.floor(x / 10);
    }
    if(xCopy===rev) {
        return true;
    }
    else{
        return false;
    }
}

let num = -121;
let res = isPalindrom(num);
console.log(res);