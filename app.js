// console.log("hello")
// var user=require("./user")
// console.log(user)
// console.log(user.userAge)
// console.log(user.userName)
// user.printUserData()
const express = require("express") //express....
//express object..
const app = express()

//https://node5.onrender.com/user/user : domain + endpoints
//http://localhost:3000/test
app.get("/test",(req,res)=>{
    
    console.log("test api called...")

    res.send("hello test api called...")

})

//http://localhost:3000/users
app.get("/users",(req,res)=>{

    res.json({
        message:"user api called...",
        data:["ram","shyam","seeta"]
    })
})
app.get("/employee",(req,res)=>{
    res.json({
        message:"employee details........",
        name:["ram","shyam","seeta","geeta"],
        age:[20,21,22,23],
        salary:[30000,40000,34000,50000],
        work:["ce","it","ce","it"]

    })

})

//server creation...
const PORT = 3000
app.listen(PORT,()=>{
    console.log("server started on port number ",PORT)
})