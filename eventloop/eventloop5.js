const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer expired"), 0);

Promise.resolve().then(() => console.log("Promise"));

fs.readFile("./eventloop/gossip.txt", "utf8", () => {
    console.log("File reading CB");
})

process.nextTick(() => {
    process.nextTick(() => console.log("inner nextTick"));
    console.log("nextTick");
})

console.log("Last line of the file")