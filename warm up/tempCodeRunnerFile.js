//
// reverse string?
let a = ["G", "a", "u", "r", "a", "v"];
   let len = a.length;
   let halflen = len / 2;

   for(let i=0; i<halflen; i++) {
      let temp = 0;
      temp = a[i];
      a[i] = a[len - 1 - i];
      a[len - 1 - i] = temp
   }

console.log(a);

