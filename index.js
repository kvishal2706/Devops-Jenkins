const express=require('express');
const app=express();
const PORT=3000

app.get('/',(req,res)=>{
    res.json({message:"Hello Bhai"});
})

app.listen(PORT,()=>{
    console.log(`App is running on PORT: ${PORT}`)
})