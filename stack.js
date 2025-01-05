/**
 * Stack implementation using JavaScript
 */
class Stack {
    constructor() {
        this.items = [];
    }

    // Push an element onto the stack
    push(element) {
        this.items.push(element);
    }

    // Pop an element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    // Peek at the top element of the stack
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the stack
    size() {
        return this.items.length;
    }

    // Print the stack
    printStack() {
        console.log(this.items.join(" "));
    }
}

// Example usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Stack contents:");
stack.printStack();

console.log("Top element:", stack.peek());
console.log("Popped element:", stack.pop());
console.log("Is stack empty?", stack.isEmpty());
console.log("Stack size:", stack.size());

console.log("Stack after pop:");
stack.printStack();
