const express=require('express');
const fetch=require('cross-fetch')
const app=express();
const cors=require('cors');
app.use(cors({origin:"*"}))

const port=process.env.PORT||2345;

app.get("/",(req,res)=>{

    res.send("Hello please add your url")
})
app.get("/unblock",(req,res)=>{

const URI=req.query.url;

//res.send(URI)
fetch(URI).then(result=>result.json()).then(result=>res.send(result)).catch(err=>res.send(err))


});
app.listen(port,()=>{

    console.log("listening")
})
