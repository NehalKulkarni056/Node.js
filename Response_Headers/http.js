// Setting response header

const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    if(req.url==='/' || req.url === '/home'){
        const html = fs.readFileSync('index.html')
        res.writeHead(200,"okay",{"content-type":"text/html"})
        res.end(html)
    }
    else{
        const html = fs.readFileSync('pnf.html')
        res.writeHead(404,"not found",{"content-type":"text/html"})
        res.end(html)
    }
})

server.listen(5000,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Server connected to port 5000");
    }
})