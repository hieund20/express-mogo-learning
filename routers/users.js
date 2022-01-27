import express from "express";
import {
  getUserList,
  addNewUser,
  updateUser,
  deleteUser,
} from "../controllers/users.js";

const router = express.Router();

//http://localhost:3000/users
router.get("/getAllUser", getUserList);
router.post("/addNewUser", addNewUser);
router.patch("/updateUser", updateUser);
router.delete("/deleteUser", deleteUser);

export default router;
