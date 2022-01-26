import express from "express";
import { getPostList, addNewPost, updatePost } from "../controllers/posts.js";

const router = express.Router();

//http://localhost:3000/posts
router.get('/posts', getPostList);
router.post('/', addNewPost);
router.patch('/', updatePost);

export default router; 