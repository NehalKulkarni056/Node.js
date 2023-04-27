// We can't have globals of browser in node.js

console.log(document);
console.log(window);

// Globals in node.js

console.log(require);
console.log(module);
console.log(console);
console.log(global);
console.log(__filename);
console.log(__dirname);

setImmediate(()=>{
    console.log("Hello...!");
},3000)