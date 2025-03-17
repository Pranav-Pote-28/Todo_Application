import express from "express"
import { createTodo, getTodos, updateTodo, deleteTodo } from "../controller/todoControllers.js";

const router = express.Router();

router.post("/", createTodo);
router.get("/", getTodos);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router