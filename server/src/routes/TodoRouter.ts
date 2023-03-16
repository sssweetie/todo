import { Router } from "express";
import { TodoController } from "../controllers/Todo";

export const todoRouter = Router();
todoRouter.get("/todo/getAll", async (req, res) => {
  try {
    const todos = await TodoController.getAll();
    console.log("getAll");
    res.status(200).send(todos);
  } catch (error) {
    console.error(error);
    res.sendStatus(422);
  }
});
todoRouter.put("/todo", async (req, res) => {
  try {
    await TodoController.update(req.body);
  } catch (error) {
    console.error(error);
    res.sendStatus(422);
  }
});
todoRouter.post("/todo", async (req, res) => {
  try {
    await TodoController.create(req.body);
  } catch (error) {
    console.error(error);
    res.sendStatus(422);
  }
});
todoRouter.delete("/todo/:id", async (req, res) => {
  try {
    await TodoController.create(req.params.id);
  } catch (error) {
    console.error(error);
    res.sendStatus(422);
  }
});
