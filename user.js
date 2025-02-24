console.log("user is loaded....")
var userName="ram"
var userAge=20;
//exporta
//module.exports=userAge
//module.exports=userName
const printUserData = ()=>{
    console.log("function called!!!")
}
module.exports={userAge,userName,printUserData}