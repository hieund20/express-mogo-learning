import { UserModel } from "../models/UserModel.js";

export const getUserList = async (req, res) => {
  try {
    const userList = await UserModel.find();

    res.status(200).json(userList);
  } catch (err) {
    res.status(500).json({ status: "failed" });
  }
};

export const addNewUser = async (req, res) => {
  try {
    //Data submit from client
    const newUser = req.body;

    const user = new UserModel(newUser);
    await user.save();

    res.status(200).json({ status: "success" });
  } catch (err) {
    res.status(500).json({ status: "failed" });
  }
};

export const updateUser = async (req, res) => {
  try {
    //Data submit from client
    const updateUser = req.body;

    await UserModel.findOneAndUpdate(
      { _id: updateUser._id },
      updateUser,
      { new: true } //Data response is new
    );

    res.status(200).json({ status: "success" });
  } catch (err) {
    res.status(500).json({ status: "failed" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.body._id;

    await UserModel.deleteOne({ _id: userId });
    res.status(200).json({ status: "success" });
  } catch (err) {
    res.status(500).json({ status: "failed" });
  }
};
