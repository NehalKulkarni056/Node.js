const http = require('http')
const fs = require('fs')

http.createServer((req,res)=>{
    if(req.url==='/' || req.url === '/home'){
        const html = fs.readFileSync('index.html')
        res.end(html)
    }
    else if(req.url==='/about'){
        res.end('This is about page.')
    }
    else{
        const html = fs.readFileSync('pnf.html')
        res.end(html)
    }
}).listen(5000,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Server connected to port 5000");
    }
})