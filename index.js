
import bodyParser from 'body-parser';
import express from 'express'; 
import userRouter from './routes/usersRouter.js';
import mongoose from 'mongoose';

const app = express()

app.use(bodyParser.json())

const connectionString = "mongodb+srv://nadeesha:wmn123@cluster0.wet56.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
 
mongoose.connect(connectionString).then(
    ()=>{
        console.log("connected to the database.test5")
    }
).catch(
    ()=>{
        console.log("Connection Failed")
    }
)

app.use("/api/users",userRouter)  
 

app.listen(5000,(req,res)=>{
    console.log("server ok")
});
 
 
 