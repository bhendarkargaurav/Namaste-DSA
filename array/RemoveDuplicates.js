//Leet code problem 26

function RemoveDuplicates(arr) {

    let x =0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > arr[x]){
            x = x + 1;
            arr[x] = arr[i];
        }
    }
    return x + 1;
}

let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 3, 4];
let res = RemoveDuplicates(arr);
console.log(res);