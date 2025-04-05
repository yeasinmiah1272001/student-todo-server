import express from "express";
import { addTodo, deleteTodo, getTodo } from "../controllers/todoController.js";

const todoRouter = express.Router();

todoRouter.post("/addTodo", addTodo);
todoRouter.delete("/deleteTodo/:id", deleteTodo);
// todoRouter.put("/updateTodo/:id");
todoRouter.get("/allTodo", getTodo);

export default todoRouter;
