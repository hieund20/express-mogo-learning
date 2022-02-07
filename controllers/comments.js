import { CommentModel } from "../models/CommentModel.js";

export const getCommentList = async (req, res) => {
  try {
    //Pagination
    const page = req.query.page;
    const limit = req.query.limit;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const counter = await CommentModel.countDocuments();
    const totalPage = Math.ceil(counter / limit);

    //Filter by post ID
    const postId = req.params.postId;

    const commentList = await CommentModel.find()
      .limit(limit)
      .skip(startIndex)
      .exec();

    res.status(200).json({
      responseData: commentList,
      limit: limit,
      page: page,
      totalPage: totalPage,
      status: "success",
    });
  } catch (err) {
    res.status(500).json({ status: "failed" });
  }
};

export const addNewComment = async (req, res) => {
  try {
    //Data submit from client
    const newComment = req.body;

    const comment = new CommentModel(newComment);
    await comment.save();

    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json({ status: "failed" });
  }
};

export const updateComment = async (req, res) => {
  try {
    //Data submit from client
    const updateComment = req.body;

    const newComment = await CommentModel.findOneAndUpdate(
      { _id: updateComment._id },
      updateComment,
      { new: true } //Data response is new
    );

    res.status(200).json(newComment);
  } catch (err) {
    res.status(500).json({ status: "failed" });
  }
};

export const deleteComment = async (req, res) => {
  try {
    //Data submit from client
    const id = req.params.id;
    await CommentModel.deleteOne({ _id: id });

    res.status(200).json({ status: "success" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
