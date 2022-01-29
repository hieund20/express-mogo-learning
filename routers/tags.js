import express from "express";
import { getTagList, postNewTag, deleteTag } from "../controllers/tags.js";

const router = express.Router();

//http://localhost:3000/tags
router.get("/getAllTags", getTagList);
router.post("/addNewTag", postNewTag);
router.delete("/deleteTag/:id", deleteTag);

export default router;
