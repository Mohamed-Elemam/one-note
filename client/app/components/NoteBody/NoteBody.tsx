import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { NoteCardData, userToken } from "@/app/notes/page";
import axios from "axios";
import { Tooltip } from "flowbite-react";

const NoteBody = (note: NoteCardData) => {
  async function deleteNote(noteId: string) {
    const { data } = await axios({
      method: "delete",
      url: "http://localhost:8080/note/?noteId=" + noteId,
      headers: {
        Authorization:
          (process.env.NEXT_PUBLIC_TOKEN_PREFIX as string) + " " + userToken,
      },
    });
    console.log(data);
  }

  async function updateNote(noteId: string) {
    const { data } = await axios({
      method: "put",
      url: "http://localhost:8080/note/?noteId=" + noteId,
      headers: {
        Authorization:
          (process.env.NEXT_PUBLIC_TOKEN_PREFIX as string) + " " + userToken,
      },
    });
    console.log(data);
  }

  return (
    <>
      <div
        onClick={() => console.log(note._id)}
        className={`block max-w-sm p-6 bg-${note.color} border border-${note.color}-200 rounded-sm shadow hover:bg-${note.color}-100 dark:bg-${note.color}-800 dark:border-${note.color}-700 dark:hover:bg-${note.color}-700`}
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {note.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 note-desc">
          {note.description}
        </p>
        <div className="flex justify-end gap-3 text-sm text-gray-700">
          <p>{note?.description?.length}</p>
          {/* note? words count */}
          <p>{note?.updatedAt}</p>
          {/* <p>09:12PM</p> */}
        </div>
        <div className="flex gap-3 justify-end mt-3">
          
          <Tooltip content="Update" placement="bottom">
            
            <span
              className="cursor-pointer hover:text-indigo-900 text-xl "
              onClick={() => {
                updateNote(note?._id);
              }}
            >
              <FaRegEdit />
            </span>
          </Tooltip>
          <Tooltip content="Delete" placement="bottom">
            <span
              className="cursor-pointer hover:text-indigo-900 text-xl "
              onClick={() => {
                deleteNote(note?._id);
              }}
            >
              <AiFillDelete />
            </span>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default NoteBody;
