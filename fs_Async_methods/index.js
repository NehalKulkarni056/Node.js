// fs methods using async and await

// Make Directory
const fs = require('fs/promises')

async function Make(){
    try{
        await fs.mkdir('Async')
        console.log("Folder created");
    }
    catch(err){
        console.log(err);
    }
}

Make()



// Write a file (Creates new file with data we mention)
async function Write(){
    try{
        await fs.writeFile('Async/index.txt',"Async File")
        console.log("File wrote");
    }
    catch(err){
        console.log(err);
    }
}

Write()


//Append data into the file (Updating data into the existing file)
async function Append(){
    try{
        await fs.appendFile('Async/index.txt','\nText appended')
        console.log("Data appended");
    }
    catch(err){
        console.log(err);
    }
}
Append()


// Read file
async function Read(){
    try{
        const data = await fs.readFile('Async/index.txt','utf-8')
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}

Read()


// Delete file
async function Delete(){
    try{
        await fs.unlink('Async/index.txt')
        console.log("File deleted");
    }
    catch(err){
        console.log(err);
    }
}

Delete()


// Remove Directory
async function deleteFolder(){
    try{
        await fs.rmdir('Async')
        console.log('Folder is deleted');
    }
    catch(err){
        console.log(err);
    }
}

deleteFolder()