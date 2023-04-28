// Fetching data without creating server

const {MongoClient} = require('mongodb')

const readData = async ()=>{
    try{
        const client = await MongoClient.connect('mongodb://127.0.0.1:27017')
        const db = await client.db('formData')
        const collection = await db.collection('logInData')
        const data = await collection.findOne({username:'nehal'})
        console.log(data)
     } catch(err){
        res.end(err)
     }
    }
    readData()