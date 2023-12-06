import { notesModel } from "../../../database/models/note.model.js";
import { userModel } from "../../../database/models/user.model.js";

export const addNote = async (req, res) => {
  const { _id } = req.authUser;
  const { title, description, color } = req.body;

  const note = new notesModel({
    title,
    description,
    color,
    userId: _id,
  });

  await note.save();
  res.status(200).json({ message: "note added successfully", note });
};

export const updateNote = async (req, res) => {
  const { _id } = req.authUser;
  const { noteId } = req.query;

  const { title, description, color } = req.body;

  const user = await userModel.findById(_id);
  if (!user) {
    return res.status(400).json({ message: "You are not the note creator" });
  }

  const note = await notesModel.findByIdAndUpdate(
    noteId,
    {
      title,
      description,
      color,
    },
    { new: true }
  );

  if (!note) {
    return res.status(400).json({ message: "note doesn't exist" });
  }

  res.status(200).json({ message: "note updated", note });
};

export const deleteNote = async (req, res) => {
  const { _id } = req.authUser;
  const { noteId } = req.query;

  const user = await userModel.findById(_id);
  if (!user) {
    return res.status(400).json({ message: "You are not the note creator" });
  }

  const note = await notesModel.findByIdAndDelete(noteId);
  if (!note) {
    return res.status(400).json({ message: "note doesn't exist" });
  }

  res.status(200).json({ message: "note deleted", note });
};

export const getUserNotes = async (req, res) => {
  const { _id } = req.authUser;

  const notes = await notesModel.find({ userId: _id });

  if (!notes) {
    return res.status(400).json({ message: "notes don't exist" });
  }

  res.status(201).json({ message: "Done", notes });
};
