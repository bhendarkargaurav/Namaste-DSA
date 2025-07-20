//leet code problem 27.
// we have val given and array if val is in array remove that elemnet 
//array should not have that val element

function removeElement(arr, val) {
    let x = 0;

    for(let i=0; i<arr.length; i++) {
        if(arr[i] != val) {
            arr[x] = arr[i];
            x = x+1;
        }
        }
    return x;
};
let arr = [1,3,2,3,3,5,6,3];
let res = removeElement(arr, 3);
console.log(res);