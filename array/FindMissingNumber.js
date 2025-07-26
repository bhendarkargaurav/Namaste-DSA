let arr = [3, 5, 4, 1, 0];

//find length
let n = arr.length;

TotalSum = n*(n+1)/2;

let PartialSum = 0
for(let i=0; i<n; i++) {
    PartialSum = PartialSum + arr[i];
}

console.log(TotalSum - PartialSum);