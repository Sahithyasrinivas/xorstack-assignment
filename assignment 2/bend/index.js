let express=require('express')
let mongoose=require('mongoose')
let cors=require('cors')
let app=express()
app.use(cors())
app.use(express.json())
let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
mongoose.connect("mongodb://127.0.0.1:27017/assignment").
then(()=>console.log("ok"))
let usersch=new mongoose.Schema({
    "_id":String,
    "name":String,
    "age":Number,
})
let user=mongoose.model("user",usersch)
app.get("/user",async(req,res)=>{
    let data=await user.find()
    res.json(data)
})
app.post("/add",(req,res)=>{
    let userrecord= new user(req.body)
    userrecord.save().then((res)=>{
        res.send("saved")
    }).catch((err)=>{
        res.send(err)
        
    })
})
app.put("/upd",(req,res)=>{
    user.findByIdAndUpdate({"_id":req.body._id},req.body).then(()=>{
        res.send("ok")
    }).catch((error)=>{
        console.log(error)
    })
})
app.delete("/del/:id",(req,res)=>{
    user.findByIdAndDelete({"_id":req.params.id}).then(()=>{
        res.send('deleted')
    }).catch((error)=>{
        console.log(error)
    })
})
app.listen(5000)