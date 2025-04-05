import express from "express";
import { addTodo, getTodo } from "../controllers/todoController.js";

const todoRouter = express.Router();

todoRouter.post("/addTodo", addTodo);
// todoRouter.delete("/deleteTodo/:id");
// todoRouter.put("/updateTodo/:id");
todoRouter.get("/allTodo", getTodo);

export default todoRouter;
