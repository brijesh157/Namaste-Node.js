const a = 10;
const fs = require("fs");

setImmediate(() => console.log("setImmediate"));


// Used ${} to print the value.
fs.readFile("./eventloop/gossip.txt", (err, data) => {
    console.log(`File reading CB ${data}`);
})



// Didn't used arrow function here.
setTimeout(function () {
    console.log("Timer expired")
}, 0);


// Or define like this way

// const printA = () => {
// }

function printA() {
    console.log("Print value of a ", a);
}

printA();
console.log("Last line of the file.")



// O/P ->
// Print value of a
// Last line of the file.
// Timer expired
// setImmediate
// File reading CB  Reason -> Because in 1st cycle libuv is still reading file and CB function
// is not present in poll queue. In 2nd cycle, CB function will be present and hence it will be executed.