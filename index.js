import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import posts from "./routers/posts.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

//Read env variable from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const URI = "mongodb+srv://hieund:FVgcfps.XT4aHSw@cluster0.kd1ue.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(bodyParser.json());
//Limit: limited when FE submit to Server
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());
app.use("/api", posts);

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB success");
    app.listen(PORT, () => {
      console.log("Server is learning on port", PORT);
    });
  })
  .catch((err) => {
    console.log("Error when connect MongoDB", err);
  });
