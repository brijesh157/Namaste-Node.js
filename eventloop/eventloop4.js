const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer expired"), 0);

Promise.resolve().then(() => { console.log("Promise") });


// Hint :- Treat callback function as another function, then find the answer.
// Also, event loop waits in poll phase in idle condition. 
fs.readFile("./eventloop/gossip.txt", "utf8", () => {
    setTimeout(() => console.log("2nd timer"), 0);

    process.nextTick(() => console.log("2nd nextTick"));

    setImmediate(() => console.log("2nd immediate"));

    console.log("File reading CB");
});

process.nextTick(() => console.log("nextTick"));

console.log("Last line of the file.");