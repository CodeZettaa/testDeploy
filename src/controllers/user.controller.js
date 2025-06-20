import userModel from "../models/user.model.js";

const getAllUsers = async (req, res) => {
  const users = await userModel.find();
  res.json({ message: "hii", users });
};

const addUser = async (req, res) => {
  const user = new userModel(req.body);
  await user.save();
  // .create
  res.json({ message: "hii" });
};

const updateUser = async (req, res) => {
  const user = await userModel.findByIdAndUpdate(
    "68551c817e4e7853384a90e9",
    {
      $set: { age: 33 },
    },
    { new: true }
  );
  res.json({ message: "hii", user });
};

export { getAllUsers, addUser, updateUser };
