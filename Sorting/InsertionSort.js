let arr = [4, 2, -10, 1, 8, 6, 9];
function insertionSort(arr){

    let n = arr.length;

    for(let i=1; i<n; i++){

        let curr = arr[i];
        let prev = i-1

        while(arr[prev] > curr && prev >= 0){   //prev >= 0   prev is a index if >=0then also
            arr[prev + 1] = arr[prev];
            prev --;
        }
        arr[prev+1] = curr;
    }
    return arr;
}

let result = insertionSort(arr);
console.log(result);