import express from "express";
import cors from "cors";
import "dotenv/config";
import todoRouter from "./routes/todoRouter.js";
import dbConnect from "./config/databaseConnect.js";

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
dbConnect();
app.get("/", (req, res) => {
  res.send("Todo Server is Running!");
});

app.use("/api/todo", todoRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
