import { PostModel } from "../models/PostModel.js";

export const getPostList = async (req, res) => {
  try {
    //Test add new Data
    // const post = new PostModel({
    //     title: 'test',
    //     content: 'test'
    // });
    // post.save();

    const postList = await PostModel.find();

    res.status(200).json(postList);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const addNewPost = async (req, res) => {
  try {
    //Data submit from client
    const newPost = req.body;

    const post = new PostModel(newPost);
    await post.save();

    res.status(200).json(postList);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updatePost = async (req, res) => {
  try {
    //Data submit from client
    const updatePost = req.body;

    const post = await PostModel.findOneAndUpdate(
      { _id: updatePost._id },
      updatePost,
      { new: true } //Data response is new
    );

    res.status(200).json(postList);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const deletePost = async (req, res) => {
  try {
    //Data submit from client
    const deletePost = req.body;

    const post = await PostModel.deleteOne({ _id: deletePost._id });

    res.status(200).json(postList);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
