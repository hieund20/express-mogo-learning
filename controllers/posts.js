import { PostModel } from "../models/PostModel.js";

export const getPostList = async (req, res) => {
  try {
    const page = req.query.page;
    const limit = req.query.limit;
    
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit
    
    const postList = await PostModel.find().limit(limit).skip(startIndex).exec();
    res.status(200).json(postList);
  } catch (err) {
    res.status(500).json({ status: "failed" });
  }
};

export const getPostDetail = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("id", id);
    const post = await PostModel.findById(id);

    res.status(200).json(post);
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
    const id = req.params.id;
    await PostModel.deleteOne({ _id: id });

    res.status(200).json({ status: "success" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
