import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    //This will automatically add createdAt and UpdatedAt
    timestamps: true,
  }
);

export const UserModel = mongoose.model("users", UserSchema);
