const http = require('http')

http.createServer((req,res)=>{
    const employees =[{
        ename : "Shobitha",
        emid : 1
    },
    {
        ename : "Nehal",
        emid : 2
    },
    {
        ename : "Boonesh",
        emid : 3
    }]

    res.writeHead(200,"ok",{'content-type':'application/json',
    'Access-Control-Allow-Origin' : 'http://localhost:5500'})

    res.end(JSON.stringify(employees))
    }).listen(5000,(err)=>{
        if(err) console.log(err);
        console.log("Server is running on port 5000");
    })