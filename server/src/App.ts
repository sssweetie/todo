import "./db";
import { router } from "./routes";

const express = require("express");
const app = express();
app.use(express.json());
app.use("/api", router);
app.listen(3001);
