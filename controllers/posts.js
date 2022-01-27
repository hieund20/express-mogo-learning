import { PostModel } from "../models/PostModel.js";

export const getPostList = async (req, res) => {
  try {
    const postList = await PostModel.find();

    res.status(200).json(postList);
  } catch (err) {
    res.status(500).json({ status: "failed" });
  }
};

export const addNewPost = async (req, res) => {
  try {
    //Data submit from client
    const newPost = req.body;

    const post = new PostModel(newPost);
    await post.save();

    res.status(200).json({ status: "success" });
  } catch (err) {
    res.status(500).json({ status: "failed" });
  }
};

export const updatePost = async (req, res) => {
  try {
    //Data submit from client
    const updatePost = req.body;

    await PostModel.findOneAndUpdate(
      { _id: updatePost._id },
      updatePost,
      { new: true } //Data response is new
    );

    res.status(200).json({ status: "success" });
  } catch (err) {
    res.status(500).json({ status: "failed" });
  }
};

export const deletePost = async (req, res) => {
  try {
    //Data submit from client
    const postId = req.body._id;
    await PostModel.deleteOne({ _id: postId });

    res.status(200).json({ status: "success" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
