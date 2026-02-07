function findsmallest(arr) {

  if(!Array.isArray(arr)) return false;

  if(arr.length === 0) retun null;

  let min = arr[0];

  for(let i=0; i<arr.length; i++) {

    let value = arr[i];

    if(typeOf value !== 'number' || !Number.isFinite(value)) {
      return false;
    }
    if(value < min) {

      min = value;
    }
  }
  return min;
}

let arr = [43,5,43,23,6,4]
let res = findsmallest(arr);
