// Read and write without pipe()

const readStream = fs.createReadStream('client/Sync.txt')
const writeStream = fs.createWriteStream('client/Text.txt')

readStream.on('data',(chunk)=>{
    writeStream.write(chunk,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("File written");
        }
    })
    })