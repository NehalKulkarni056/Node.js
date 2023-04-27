// fs synchronous methods

// Make Directory
const fs = require('fs')

fs.mkdirSync('Folder_name')

// Delete directory
fs.rmdirSync('Folder_name')

// Create a file
fs.writeFileSync('filename.txt','data')

// Append data into existing file
fs.appendFileSync('filename.txt','extra data')

// Read file (utf-8--->unicode transform format, transforms hexadecimal to string)
let data = fs.readFileSync('filename.txt','utf-8')

// Delete a file
fs.unlinkSync('filename.txt')