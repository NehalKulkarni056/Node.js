// Path methods

const path = require("path")

let file = path.basename(__filename)
// it gives file name
console.log(file);

let folder = path.basename(__dirname)
// Gives folder name i.e., directory
console.log(folder);

let ext = path.extname(__filename)
// Gives extension of the file
console.log(ext);

let res = path.resolve("c:/users///desktop")
// removes extra slashes in the path. (resolves the path)
console.log(res);

let check = path.isAbsolute('./index.js')
// gives a boolean output. if the path given is absolute path output will be true or else false
console.log(check);

let join = path.join(__dirname,"index.js",'Nehal')
// adds the path names. or we can say join the paths.
console.log(join);

let parse = path.parse(__filename)
// used to parse the path. which gives object.
console.log(parse);