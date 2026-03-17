let stack = [];

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);

stack.pop();
stack.pop();

// find the top most element of stack();

let peek = stack[stack.length-1];
console.log(peek);

console.log(stack);
