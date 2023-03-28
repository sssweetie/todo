import { Router } from "express";
import { todoRouter } from "./TodoRouter";

export const router = Router();

router.use("/todo", todoRouter);
