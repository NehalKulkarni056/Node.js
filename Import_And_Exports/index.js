// There are 2 types of Import and Export panels
// 1) Module Import and Export (Javascript I/E panel---> we can use them in node js environment by changing "type":"module" in package.json)
// 2) Common JS (node js I/E panel)

// 1) Module I/E
// 2 sub category a)Default and b)Named


// a) Default I/E (Module I/E)

// index.js
let add=()=>{
    let a= 3
    let b=5
    let c=a+b
    console.log(c);
}
export default add;
// app.js
import add from './index.js'
add();



// b) Named I/E

// index.js
let a= 30
let b= 50
export {a,b}
// Or
// export let a=30
// export let b= 50

// app.js
import {a,b} from './index.js'
console.log(a+b);





// Common js import and exports

// index.js
let c = 5;
let addition=()=>{
    return 4+5
}

module.exports={
    a,
    addition
}

// Or
exports.c=5
exports.addition=()=>{
    return 4+5
}

// app.js
const {c,addition} = require('index')
console.log(c,addition());

// Or
const Math = require('index')
console.log(math.c,math.addition());