import mongoose from "mongoose"
import dotenv from "dotenv"

// dotenv.config()
 
const connectDb = async()=>{

    try
        { 
            await mongoose.connect(process.env.MONGO_URI);
            console.log("successfully connected with mongo db")
        }catch(err){
            console.log("error while connecting with mongo",err.message)
        }

}

export default connectDb; 