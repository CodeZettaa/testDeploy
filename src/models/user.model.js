import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
      min: 0,
    },
  },
  {
    versionKey: false,
  }
);

const userModel = model("User", userSchema);

export default userModel;
