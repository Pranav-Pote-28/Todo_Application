import Todo from "../models/todoModel.js";

export const createTodo = async(req, res)=>{


    try{    
        const todo = new Todo(req.body);
        await todo.save();

        let totalPages = await Todo.countDocuments()
        totalPages = Math.ceil(totalPages / 5)

        res.json({todo, totalPages})

    }catch(err){
        console.log(`error in post method ${err.message}`)
        res.status(500).json({error: err.message})
    }

}

export const getTodos = async (req, res) => {
  try {


    let {page = "1", limit = "5", search = "" ,lastPage} = req.query;

    page = parseInt(page);
    lastPage = parseInt(lastPage);
    limit = parseInt(limit);

    const skipTodos = (page - 1) * limit; 


    const query = search ? { title: { $regex: search, $options: "i" } } : {};

    const totalTodos = await Todo.countDocuments(query);
    const todos = await Todo.find(query).skip(skipTodos).limit(limit);

    res.json({ todos, totalPages: Math.ceil(totalTodos / limit) });
  } catch (err) {
    console.log(`Error in the GET method: ${err.message}`);
    res.status(500).json({ error: err.message });
  }
};

export const updateTodo = async(req,res)=>{
    try{
        const getTodo = await Todo.findOne({_id: req.params.id});

        if(!getTodo){
            return res.status(404).json({err:"couldnt find the todo list"});
        }

        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!updatedTodo){

        console.log("no todo exists");
        return res.status(404).json({message:"no todo exists with such id ."});
    }
        res.json(updatedTodo);

    }catch(err){
        res.status(500).json({err:err.message}) 
    } 
}

export const deleteTodo = async(req,res)=>{

    try{
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id,);

        if(!deletedTodo){
            return res.json({error:"todo list with this id doesnt exist !"})
        }

        res.json({msg:"deleted successfully"})

    }catch(err){
        res.status(500).json({err:err.message})
    }


}

