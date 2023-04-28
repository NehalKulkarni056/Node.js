const fs = require('fs/promises')

const writeStream = fs.createWriteStream('client/Text.txt')

writeStream.write("hello...!",(err)=>{
    if (err) {
        console.log(err);
    }
    else{
        console.log("File written...!");
    }
})