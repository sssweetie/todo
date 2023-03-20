import { Router } from "express";
import { TodoController } from "../controllers/Todo";

export const todoRouter = Router();
todoRouter.get("/getAll", async (req, res) => {
  try {
    const todos = await TodoController.getAll();
    res.status(200).send(todos);
  } catch (error) {
    console.error(error);
    res.sendStatus(422);
  }
});
todoRouter.put("/", async (req, res) => {
  try {
    await TodoController.update(req.body);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(422);
  }
});
todoRouter.post("/", async (req, res) => {
  try {
    await TodoController.create(req.body);
  } catch (error) {
    console.error(error);
    res.sendStatus(422);
  }
});
todoRouter.delete("/:id", async (req, res) => {
  try {
    await TodoController.delete(req.params.id);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(422);
  }
});
