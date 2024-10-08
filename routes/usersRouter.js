import express from "express"
import { getUsers , putUsers , postUsers , deleteUsers} from "../controllers/userControllers.js"
const userRouter = express.Router()

userRouter.get("/",getUsers)
 
userRouter.post("/",postUsers)


userRouter.delete("/",deleteUsers)
 
userRouter.put("/",putUsers)


/*
userRouter.get("/",(req,res)=>{
    res.json({
       message : "this is aget request"
    })
})
 
userRouter.post("/",(req,res)=>{
    res.json({
        message : "this is post request"
    }) 
})


userRouter.delete("/",(req,res)=>{
    res.json({
        message :"this is a delete request"
    })
})
 
userRouter.put("/",(req,res)=>{
    req.json({
        message : "This is a Put Request"
    })
})
*/
export default userRouter;