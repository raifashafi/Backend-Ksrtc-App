const mongooose=require("mongoose")
const schema=mongooose.Schema({
    "name":{type:String,required:true},
    "email":{type:String,required:true},
    "phone":{type:String,required:true},
    "gender":{type:String,required:true},
    "password":{type:String,required:true}



})
let usermodel=mongooose.model("uesrs",schema)
module.exports={usermodel}