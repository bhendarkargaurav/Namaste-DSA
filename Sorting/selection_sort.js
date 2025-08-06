// find the min element and place into start and at the end will get sorted arr

let arr = [4, 2, 1, 6, 12, 3];

function SelectionSort(a) {
  let n = a.length;

  for (let i = 0; i < n - 1; i++) {
    let min = i;

    for (let j = i + 1; j < n; j++) {
      if (a[j] < a[min]) {
        min = j;
      }
    }
    if (min != i) {
      let temp = a[i];
      a[i] = a[min];
      a[min] = temp;
    }
  }
  return a;
}

let result = SelectionSort(arr);
console.log(result);
