import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    userName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    cPassword: {
      type: String,
    },  
  },
  {
    timestamps: true,
  }
);
export const userModel = mongoose.model("User", userSchema);
