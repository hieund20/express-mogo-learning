import express from "express";
import { getPostList, addNewPost, updatePost } from "../controllers/posts.js";

const router = express.Router();

//http://localhost:3000/posts
router.get("/getAllPost", getPostList);
router.post("/addNewPost", addNewPost);
router.patch("/", updatePost);

export default router;
