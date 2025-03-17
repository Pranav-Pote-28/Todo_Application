import mongoose from "mongoose"


const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: {type:Date, default:Date.now},
})

const Todo = mongoose.model("Todo", TodoSchema) 

export default Todo;