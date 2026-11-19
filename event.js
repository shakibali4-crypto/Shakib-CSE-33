const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("greet", (name) => {
    console.log(`Hello, ${name}!`);
});

myEmitter.on("exit", () => {
    console.log("Program is exiting...");
});

myEmitter.emit("greet", "Shakib");
myEmitter.emit("exit");
