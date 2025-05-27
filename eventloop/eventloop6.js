const fs = require('fs');

setImmediate(() => { console.log("setImmediate") });

setTimeout(() => console.log("Timer expired"), 0);


fs.readFile('example.txt', 'utf8', () => {
    setTimeout(() => console.log("2nd timer"), 0);
    fs.readFile('example1.txt', 'utf8', () => console.log("inner readfile"));
    process.nextTick(() => console.log("2nd nextTick"));
    setImmediate(() => console.log("2nd setImmediate"));
    console.log("File reading CB");
})

process.nextTick(() => console.log("nextTick"));

console.log("Last line of the file.");

