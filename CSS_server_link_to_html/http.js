// When we send html as response, the css will not be applied, even though we have linked css file to it. To over come this we can just give url of css into the link tag of html file.


const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    if(req.url==='/' || req.url==='home'){
        res.writeHead(200,"okay",{"content-type":"text/html"})
        let readStream = fs.createReadStream('index.html')
        readStream.pipe(res)
    }
    else if (req.url==='/css'){
            res.writeHead(200,"okay",{"content-type":"text/css"})
            let readStream = fs.createReadStream('style.css')
            readStream.pipe(res)
        }
        else{
            res.writeHead(200,"okay",{"content-type":"text/html"})
            let readStream = fs.createReadStream('pnf.html')
            readStream.pipe(res)
        }
    }
).listen(5000,(err)=>{
    console.log("port connected");
})