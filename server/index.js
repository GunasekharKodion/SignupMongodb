const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const Worker=require('./models/Employee')
const Logined=require('./models/Login')


const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Employee")

app.post('/register',(req, res)=>{
Worker.create(req.body)
.then(employees=>res.json(employees))
.catch(err=>res.json(err))
})


app.post('/login',(req, res)=>{
const {email, password} = req.body;
Worker.findOne({emaill: email})
.then(user=>{
    if(user){
        if(user.passwordd === password){
            res.json("Success")
Logined.create(req.body)
.then(logged=>res.json(logged))
.catch(err=>res.json(err))
        } else{
            res.json("The password is incorrect")
        }
    } else {
        res.json("No records exists")
    }
})
})



app.listen(3001, ()=>{
    console.log("server is running")
})