let epxress = require('express');

let app = epxress();

app.get('/',(req,res)=>{
    res.send('Yeee AWS!!')
})

let port =process.env.port || 3000;
app.listen(port,(req,res)=>{
    console.log('Listening to 3000')
})