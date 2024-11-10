import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import MessageRoute from "./routes/MessageRoute.js";

// Create Express App
const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/messages_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check connection
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected..."));

// Middleware
app.use(cors());
app.use(express.json());
app.use(MessageRoute);

// Routes
app.listen(5000, () => console.log("Server up and running..."));
