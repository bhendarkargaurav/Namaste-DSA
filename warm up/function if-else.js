// function helloword(name) {
//     console.log("Hello", name);
// }
// helloword("Gaurav");
// helloword("rj");


function square(value) {
    let result = value * value;
    return result;
}
let value = square(4);
console.log(value);


// check the person is eligible for vote or not

function eligibletovote (age){
    if(age<0){
        console.log("Invalid voter");
    }
    else if(age<18){
        console.log("Not Eligible to vote");
    }
    else{
        console.log("Eligible");
    }

}

eligibletovote(19);
eligibletovote(-1);
eligibletovote(17);
eligibletovote(50);


function isEvenOdd(num){
    //to do
    if(num %2 == 0){
        console.log(num,"Even Number");
    }
    else{
        console.log(num, "Odd Number");
    }
}

let num = 7
isEvenOdd(num);




