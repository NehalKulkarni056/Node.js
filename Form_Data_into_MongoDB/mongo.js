const http = require('http')
const fs = require('fs')
const {parse} = require('querystring')
const {MongoClient} = require('mongodb')
const crypto = require('crypto')

const url = "mongodb://127.0.0.1:27017"

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    if (req.headers["content-type"] === "application/x-www-form-urlencoded") {
      let body = ""
      req.on("data", (chunk) => {
        body += chunk
      })
      req.on('end', async () => {
        try {
          const finalBody = parse(body)
          const username = finalBody.username
          const password = finalBody.password
          const hashedPassword = crypto.createHmac('sha256', 'secret').update(password).digest('hex')

          const client = await MongoClient.connect(url)
          const db = await client.db("userdb")
          const collection = await db.collection("user")
          await collection.insertOne({ username: username, password: hashedPassword })
        
          res.end("Data sent successfully...!")
        } catch (error) {
          console.error(error)
          res.writeHead(500, "Internal Server Error", { "Content-Type": "text/plain" })
          res.end("An error occurred while processing your request.")
        } finally {
          client.close()
        }
      })
    } else {
      res.writeHead(400, "Bad Request", { "Content-Type": "text/plain" })
      res.end("Invalid content type.")
    }
  } else {
    if (req.url === '/' || req.url === '/home') {
      res.writeHead(200, 'OK', { "Content-Type": "text/html" })
      const html = fs.createReadStream("index.html", "utf-8")
      html.pipe(res)
    } else {
      res.writeHead(404, "Not Found", { "Content-Type": "text/html" })
      res.end("<h1>OOPS page not found....!</h1>")
    }
  }
})

server.listen(5000, (err) => {
  if (err) console.log(err);
  console.log("Server running on port 5000");
})
