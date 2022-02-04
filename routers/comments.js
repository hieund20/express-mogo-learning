import express from "express";
import {
  addNewComment,
  deleteComment,
  getCommentList,
  updateComment,
} from "../controllers/comments.js";

const router = express.Router();

router.get("/getAllComments", getCommentList);
router.post("/addNewComment", addNewComment);
router.patch("/updateComment", updateComment);
router.delete("/deleteComment/:id", deleteComment);

export default router;
