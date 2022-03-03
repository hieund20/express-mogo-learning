import { TagModel } from "../models/TagModel.js";

export const getTagList = async (req, res) => {
  try {
    const tagList = await TagModel.find();
    const counter = await TagModel.countDocuments();
    
    res
      .status(200)
      .json({ responseData: tagList, count: counter, status: "success" });
  } catch (err) {
    res.status(500).json({ status: "failed" });
  }
};

export const postNewTag = async (req, res) => {
  try {
    const newTag = req.body;

    const tag = new TagModel(newTag);
    await tag.save();

    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json({ status: "failed" });
  }
};

export const deleteTag = async (req, res) => {
  try {
    const id = req.params.id;
    await TagModel.deleteOne({ _id: id });

    res.status(200).json({ status: "success" });
  } catch (err) {
    res.status(500).json({ status: "failed" });
  }
};
