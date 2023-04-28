fetch("http://localhost:5000/")
.then(res=>res.json())
.then (data=>{
    let div = document.getElementById('id')
    let output = ''
    data.forEach(employee => {
        output += ` <h1> Ename : ${employee.ename} </h1>`
    });
    div.innerHTML = output
})
