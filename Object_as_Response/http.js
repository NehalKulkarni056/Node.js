// Sending object as a response

const http = require('http')

let a = {
    name : "Heath Ledger",
    age : "not found"
}

http.createServer((req,res)=>{
    res.writeHead(200,"okay",{"content-type":"application/json"})
    res.end(JSON.stringify(a))
}).listen(5000,(err)=>{
    if(err) console.log(err);
    console.log("port 5000 is connected");
})