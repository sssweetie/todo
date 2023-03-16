import "./db";
import { router } from "./routes/index";

const express = require("express");
const app = express();
app.use(express.json());
app.use("/api", router);
app.listen(3001, () => console.log("Server is starting in port 3001"));
