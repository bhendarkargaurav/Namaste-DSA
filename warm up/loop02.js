// //search index of element
// function searchelemet(arr, x){
// for(let i=0; i<arr.length; i++){
  
//     if(arr[i] == x){
//         const result = i
//         return result;
//     } 
//   }
//   return -1
// }

// let arr = [5, 10, 15, 20, 25, 30];
// let x = 20
// let elements = searchelemet(arr, x);
// console.log(elements);


// find all -ve number and count it
function negativenumber(arr) {
    count = 0
    result = [];
    for(let i=0; i< arr.length; i++) {
        if(arr[i] < 0) {
            count ++;
            result.push(arr[i]);
        }
        
    }
    return {count, result}
}


let arr = [-12, 23, -4, 23, -54, 65];

let negativenumbers = negativenumber(arr);
console.log(negativenumbers)



//find tyhe largest elem from arr
//using sorting

// function largestnumber(arr) {
//     let sortedarr = arr.sort((a, b) => a - b)

//     console.log(sortedarr)
//     let largestelement = sortedarr[sortedarr.length-1]
        // explian: sortedarr.length-1 = last digit
        // sortedarr[lastdigit];
//     return largestelement;
// }


// let arr = [ 87, 34, 21, 32, 542, 24];

// let res = largestnumber(arr)

// console.log(res);



// withouty sortingh
// function largestelement(arr){
//  let largest = -Infinity;
//  for(let i=0; i<arr.length; i++){
//     if(arr[i]>largest){
//         largest = arr[i];
//     }
//  }

//  return largest;
// }

// let arr = [ 87, 34, 21, 32, 542, 24];

// let res = largestelement(arr);
// console.log(res);


// find the smallest element?
// function smallestelemet(arr){
//  let smallest = Infinity;
//  for(let i=0; i<arr.length; i++){
//     if(arr[i]<smallest){
//         smallest = arr[i];
//     }
//  }

//  return smallest;
// }

// let arr = [ 87, 34, 21, 32, 542, 24];

// let res = smallestelemet(arr);
// console.log(res);



// function searchElement(arr, x) {
//     for(let i=0; i<arr.length; i++) {
//         if(arr[i] == x) {
//             const result = i;
//             return result
//         }
//     }
//     return -1;
// }
// let arr = [ 5, 10, 15, 20, 25];
// let x = 16;
// let element = searchElement(arr, x);
// console.log(element);