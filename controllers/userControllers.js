import mongoose from "mongoose"

const userSchema  = mongoose.Schema(
    {
        email : {
            type : String,
            required : true,
            unique : true
        }
        firstName : {
            type : String  
        }
        LastName : {
            type : String  
        }
        image : {
            type : String,
           
        }
    }
)
export function getUsers(req,res){
    res.json({
        messsage : "This is Get request"
    })
}

export function postUsers(req,res){

    const user = req.body
    console.log(user)

    
    res.json({
        messsage : "This is Post request"
    })
}

export function putUsers(req,res){
    res.json({
        messsage : "This is put request"
    })
}

export function deleteUsers(req,res){
    res.json({
        messsage : "This is delete request"
    })
}

/*(req,res)=>{
    req.json({
        messsage : "this is arroe function without name"
    })
}*/