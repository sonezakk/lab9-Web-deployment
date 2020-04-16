let express = require('express')
let app =express()

app.get('/', (req,res) =>{
    console.log('hello world')
    res.send('LAB09  SORAWIT MUENPHAN 5835512046')

})

// app.get('/crash',(req,res)=>{
//     console.log('Crash!!')
//     res.send('crash')
//     process.exit(1) 
// })
app.listen(process.env.PORT ,
     () =>console.log('Server is running  at ', process.env.PORT))
