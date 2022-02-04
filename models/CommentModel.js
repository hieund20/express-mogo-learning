import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    post: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      ref: "posts",
    },
    author: {
      type: Object,
      required: false
    },
    likeCount: {
      type: Number,
      default: 0,
    },
  },
  {
    //This will automatically add createdAt and UpdatedAt
    timestamps: true,
  }
);

export const CommentModel = mongoose.model("comments", CommentSchema);
