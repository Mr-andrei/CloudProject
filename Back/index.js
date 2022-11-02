import express from "express";
import mongoose from "mongoose";
import config from "config";
import authRouter from "./routes/auth.routes.js";
import fileRouter from "./routes/file.routes.js";
import cors from "cors";

const app = express();
const PORT = config.get("serverPort")

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/files", fileRouter);

const start = async () => {
    try {
        await mongoose.connect(config.get("DB_URL"));
        app.listen(PORT, () => {
            console.log("Server work on port", PORT);
        });
    } catch (e) {
    }
};
start();

//  "filePath": "D:\\Projects\\Cloud\\CloudProject\\Back\\files"