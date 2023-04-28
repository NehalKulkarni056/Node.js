// Fetching data from mongodb and giving it on response end

const http = require('http')
const {MongoClient} = require('mongodb')

const server = http.createServer(async (req,res)=>{
    try{
        const client = await MongoClient.connect('mongodb://127.0.0.1:27017')
        const db = await client.db('formData')
        const collection = await db.collection('logInData')
        const data = await collection.findOne({username:'nehal'})
        res.writeHead(200,'ok',{ 'Content-Type': 'application/json' })
        res.end(JSON.stringify(data))
     } catch(err){
        res.end(err)
     }
    })

server.listen(5000, (err) => {
    if (err) console.log(err);
    console.log("Server running on port 5000");
  })