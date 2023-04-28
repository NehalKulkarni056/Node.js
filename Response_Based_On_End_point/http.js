const http = require('http')

http.createServer((req,res)=>{
    if(req.url==='/' || req.url === '/home'){
    res.end('This is home.')
    }
    else if(req.url==='/about'){
        res.end('This is about page.')
    }
    else{
        res.end("page does not exist")
    }
}).listen(5000,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Server connected to port 5000");
    }
})