import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import cors from "cors"


import connectdb from "./config/db.js"
import todoRoutes from "./routes/todoRoutes.js"

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

connectdb();

app.use("/api/todos", todoRoutes);

const PORT = process.env.PORT

app.listen(PORT || 3000, ()=>{
    console.log("server connected to the port ")
} )