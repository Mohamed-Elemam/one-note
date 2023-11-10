import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
   colors:["yellow","green","purple"  ]
  },
  { timestamps: true }
);

export const notesModel = mongoose.model("Note", noteSchema);

