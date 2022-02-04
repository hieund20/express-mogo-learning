import express from "express";
import {
  addNewPost,
  deletePost,
  getPostDetail,
  getPostList,
  updatePost,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/getAllPost", getPostList);
router.get("/getAllPost/:id", getPostDetail);
router.post("/addNewPost", addNewPost);
router.patch("/updatePost", updatePost);
router.delete("/deletePost/:id", deletePost);

export default router;
