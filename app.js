let epxress = require('express');

let app = epxress();

app.get('/',(req,res)=>{
    res.send('Yeee AWS!!')
})

app.listen('3000',(req,res)=>{
    console.log('Listening to 3000')
})