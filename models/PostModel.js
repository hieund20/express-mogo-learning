import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      default: "Anonymous",
      ref: "users",
    },
    tag: ["travel", "programming", "english"],
    thumbnailImage: String,
    attachment: String,
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

export const PostModel = mongoose.model("Post", PostSchema);
