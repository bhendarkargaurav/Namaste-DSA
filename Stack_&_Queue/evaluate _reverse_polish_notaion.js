var evalRPN = function(tokens) {
    let stack = [];

    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];

        if (token === "+") {
            let b = stack.pop();
            let a = stack.pop();
            stack.push(a + b);

        } else if (token === "-") {
            let b = stack.pop();
            let a = stack.pop();
            stack.push(a - b);

        } else if (token === "*") {
            let b = stack.pop();
            let a = stack.pop();
            stack.push(a * b);

        } else if (token === "/") {
            let b = stack.pop();
            let a = stack.pop();
            stack.push(Math.trunc(a / b)); // important

        } else {
            stack.push(Number(token)); // convert string to number
        }
    }

    return stack.pop();
};

// test
let tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
let ans = evalRPN(tokens);
console.log(ans); // 22