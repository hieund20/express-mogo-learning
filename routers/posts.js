import express from "express";
import {
  getPostList,
  getPostDetail,
  addNewPost,
  updatePost,
  deletePost,
} from "../controllers/posts.js";
import cors from "cors";

const router = express.Router();

//http://localhost:3000/posts
router.get("/getAllPost", getPostList);
router.get("/getAllPost/:id", getPostDetail);
router.post("/addNewPost", addNewPost);
router.patch("/updatePost", updatePost);
router.delete("/deletePost/:id", deletePost);

export default router;
