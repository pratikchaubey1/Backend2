
const express  = require('express');
// create an instance of express 
const app = express();
app.listen(3000,()=>{
    console.log('Server is running no port 3000');
})
app.get('/',(req,res)=>{
    res.send('Hello pratik')
})