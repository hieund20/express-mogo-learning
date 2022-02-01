import express from "express";
import {
  getPostList,
  getPostDetail,
  addNewPost,
  updatePost,
  deletePost,
} from "../controllers/posts.js";
import cors from "cors";

var corsOptions = {
  origin: "http://localhost:3000/",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const router = express.Router();

//http://localhost:3000/posts
router.get("/getAllPost", getPostList);
router.get("/getAllPost/:id", getPostDetail);
router.post("/addNewPost", cors(corsOptions), addNewPost);
router.patch("/updatePost", updatePost);
router.delete("/deletePost/:id", deletePost);

export default router;
