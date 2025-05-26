
// Do baat hai kis time pe call hua aur kis time pe finish hua.
// Asynchronous tasks mein jo jaldi finish wo pehle print hoga.

const https = require("https");
const fs = require("fs");

var a = 100;
var b = 200;

console.log("setTimeout called at " + new Date(Date.now()));
setTimeout(() => {
    console.log("setTimout");
    console.log("setTimeout response at " + new Date(Date.now()));
}, 5000);

console.log("Fetch API called at " + new Date(Date.now()));
https.get("https://www.amazon.in/", (res) => {
    console.log("Fetch API " + res?.secret);
    console.log("Fetch API response at " + new Date(Date.now()));
})

console.log("File data called at " + new Date(Date.now()));
fs.readFile("./eventloop/gossip.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:" + err);
        return;
    }
    console.log("File data -->> ", data);
    console.log("File data response at " + new Date(Date.now()));
});

function multiplyFn(x, y) {
    const result = x * y;
    return result;
}
console.log("multiplyFn called at " + new Date(Date.now()));
var c = multiplyFn(a, b);
console.log(c);
console.log("multiplyFn response at " + new Date(Date.now()));