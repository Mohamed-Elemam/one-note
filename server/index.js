import express from "express";
import cors from "cors";
import { config } from "dotenv";
config();
import { dbConnection } from "./database/dbconnection.js";
import userRouter from "./src/modules/user/user.router.js";
import notesRouter from "./src/modules/note/note.router.js";

const app = express();
const port = process.env.PORT;

dbConnection();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["X-Requested-With", "Content-Type", "Authorization"],
  })
);
app.use(express.json());

app.use("/user", userRouter);
app.use("/note", notesRouter);

app.get("/", (req, res, next) => {
  res.json({ message: "Server is running ..." });
});
app.use("*", (req, res, next) => {
  res.status(404).json({ message: "Error 404 url not found" });
});

app.use((err, req, res, next) => {
  if (err) {
    return res.status(err["cause"] || 500).json({ message: err.message });
  }
});

app.listen(port, () => console.log(`App is listening on port ${port}!`));
