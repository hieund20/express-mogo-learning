import express from "express";
import {
  getPostList,
  addNewPost,
  updatePost,
  deletePost,
} from "../controllers/posts.js";

const router = express.Router();

//http://localhost:3000/posts
router.get("/getAllPost", getPostList);
router.post("/addNewPost", addNewPost);
router.patch("/updatePost", updatePost);
router.delete("/deletePost", deletePost);

export default router;
