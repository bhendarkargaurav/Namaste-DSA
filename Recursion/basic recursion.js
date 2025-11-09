// // print n to 1
// function print(n) {
//     if(n<1) return;
//     console.log(n);
//     print(--n);  // n = n-1
//                  // print(n);
// }
// let a = 10;
// print(a);


// print 1 .. to ... n
let x = 5
function print(n) {
    
    if(n>x) return;
    console.log(n);
    print(++n);  // n = n-1
                 // print(n);
}
let a = 1;
print(a);
