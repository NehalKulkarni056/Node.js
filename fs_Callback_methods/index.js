// fs Callback methods

const fs = require('fs')

//Create a file
fs.mkdir('folder_name',(err)=>{
    if(err) console.log(err);
    console.log("Folder created successfully");
})

// Remove/Delete folder
fs.rmdir('folder_name',(err)=>{
    if(err) console.log(err);
    console.log("Folder deleted successfully");
})

// Creating a file
fs.writeFile('file.js',"JS file",(err)=>{
    if(err) console.log(err);
    console.log("File created successfully");
})


// Reading a file
fs.readFile('file.js','utf-8',(err,data)=>{
    if(err) console.log(err);
    console.log(data);
})

//Appending a data
fs.appendFile('file.js','Append',(err)=>{
    if(err) console.log(err);
    console.log("Data updated successfully");
})

// Deleting the file
fs.unlink('file.js',(err)=>{
    if(err) console.log(err);
    console.log("File deleted successfully");
})