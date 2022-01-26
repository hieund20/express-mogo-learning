import { UserModel } from "../models/UserModel.js";

export const getUserList = async (req, res) => {
  try {   
    const userList = await UserModel.find();

    res.status(200).json(userList);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const addNewUser = async (req, res) => {
  try {
    //Data submit from client
    const newUser = req.body;

    const user = new UserModel(newUser);
    await user.save();

    res.status(200).json(postList);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateUser = async (req, res) => {
  try {
    //Data submit from client
    const updateUser = req.body;

    const user = await UserModel.findOneAndUpdate(
      { _id: updateUser._id },
      updateUser,
      { new: true } //Data response is new
    );

    res.status(200).json(postList);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const deleteUser = async (req, res) => {
  try {
    //Data submit from client
    const deleteUser = req.body;

    const user = await UserModel.deleteOne({ _id: deleteUser._id });

    res.status(200).json(postList);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
