// for binary search algo arr should be sorted




function BinarySearch(arr, target){
    let left = 0;
    let right = arr.length - 1;

while(right >= left) {
    let middle = Math.floor((left + right) / 2);

    if(target === arr[middle]) {
        return middle;
    }
    else if(target < arr[middle]) {
        right = middle - 1;
    }
    else {
        left = middle + 1;
    }
}
return -1;
}

let arr = [-10, -3, -1, 0, 4, 7, 9, 12, 35];
let target = 9
let res = BinarySearch(arr, target);
console.log(res);