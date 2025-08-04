function linearseach(arr, x) {
    for(let i=0; i<arr.length; i++){
        if(arr[i] == x) {
            return i;
        }
    }
}
let arr = [1,2,5, 3, 8, 4];
let res = linearseach(arr, 8);
console.log(res);