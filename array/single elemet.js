//find the single elem rather than that all are duplicates:

// Upproch 1:
// function SingleEle(arr) {
//     let hash = {};
//     for(let i=0; i<arr.length; i++) {
//         if(!hash[arr[i]]) {
//             hash[arr[i]]=1;
//         }
//         else{
//             hash[arr[i]]++;
//         }
//     }
//     for(let i=0; i<arr.length;i++) {
//         if(hash[arr[i]] == 1) {
//             return arr[i];
//         }
//     }
// };


// upproch 2

function SingleEle(are) {
    let xor = 0;
    for(let i=0; i<arr.length; i++) {
        xor = xor ^ arr[i];
    }
    return xor;
}
let arr = [1,3,5,3,1,4,5];
let res = SingleEle(arr);
console.log(res);