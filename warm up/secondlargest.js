function findsecondelargest(arr) {
    let length = arr.length;
    if (length < 2) {
        return "array should have at least two element";
    }

    let firstlargest = -Infinity;
    let secondlargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
    
        if (arr[i] > firstlargest) {
            secondlargest = firstlargest;
            firstlargest = arr[i];
        }
        else {
            if (arr[i] > secondlargest && arr[i] != firstlargest) {
                secondlargest = arr[i];
            }
        }
    }
    return { firstlargest, secondlargest };
}

let arr = [23, 32, 23, 43,65, 65, 65, 32];
let res = findsecondelargest(arr);
console.log(res);

