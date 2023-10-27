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
  
    isOnline: {
      type: String,
      enum: { values: [true, false] },
    },
    isDeleted: {
      type: String,
      default: false,
    },
    isConfirmed: {
      type: Boolean,
      default: false,
    },
   
  },
  {
    timestamps: true,
  }
);
export const userModel = mongoose.model("User", userSchema);
