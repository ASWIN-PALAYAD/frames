import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import connectDB from "./config/connectDb.js";
import cors from "cors";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
dotenv.config();

//routess imports
import userRoutes from "./routes/usersRoutes.js";
import autheRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";

//middlewares
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" })); 
app.use(morgan("common"));

//static paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/images", express.static(path.join(__dirname, "public/images")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => { 
    cb(null, req.body.name); 
  },
});

const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploaded successfully");
  } catch (error) {
    console.log(error);
  }
});

//routes
app.use("/api/users", userRoutes);
app.use("/api/auth", autheRoutes);
app.use("/api/post", postRoutes);

app.listen(5000, () => {
  connectDB();
  console.log("server started at port 5000 ");
});
