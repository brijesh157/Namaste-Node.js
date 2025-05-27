const fs = require("fs");

const a = 100;

setImmediate(() => console.log("setImmediate"));


Promise.resolve(() => { console.log("Promise") });
// This will not print because here promise is resolving a function but that function is not called.
// Fix -> Promise.resolve(() => { console.log("Promise") }).then((fn) => { fn() });

//Promise.resolve().then(() => { console.log("Promise") });
//Promise.resolve("Promise").then(console.log);


fs.readFile("./eventloop/gossip.txt", "utf8", (err, data) => {
    console.log("File reading operation " + data);
})

setTimeout(() => { console.log("Timer expired") }, 0);

process.nextTick(() => { console.log("Process.nextTick") });

function printA() {
    console.log("Print a " + a);
}

printA();
console.log("Last line of the file.")