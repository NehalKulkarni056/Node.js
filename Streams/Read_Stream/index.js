const fs = require("fs")

const readStream = fs.createReadStream("client/Sync.txt")

readStream.on("data",(chunk)=>{
    console.log("new chunk");
    console.log(chunk);
})