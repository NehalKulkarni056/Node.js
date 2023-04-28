const EventEmitter = require('events')

const student = new EventEmitter()

student.on('placements',(placed)=>{
    if(placed === true){
        console.log("Ohhh Yes....!");
    }
    else{
        console.log("Ohh no, ohh no, ohh no no no no no....!");
    }
})

student.emit('placements',false)