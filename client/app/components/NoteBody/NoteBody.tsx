import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { NoteCardData, userToken } from "@/app/notes/page";
import axios from "axios";
import { Tooltip } from "flowbite";

const NoteBody = (note: NoteCardData ) => {

  async function deleteNote(noteId: string) {
    const { data } = await axios({
      method: "delete",
      url: 'http://localhost:8080/note/?noteId='+noteId,
      headers: {
        Authorization:
        process.env.NEXT_PUBLIC_TOKEN_PREFIX as string +" " + userToken,
      },
    });
    console.log(data);
  }


  
  async function updateNote(noteId: string) {
    const { data } = await axios({
      method: "put",
      url: 'http://localhost:8080/note/?noteId='+noteId,
      headers: {
        Authorization:
        process.env.NEXT_PUBLIC_TOKEN_PREFIX as string +" " + userToken,
      },
    });
    console.log(data);
  }

  return (
    <>
      <div
        className={`bg-${note.color}-200 rounded-lg m-0 p-5 flex flex-col shadow-lg`}
        key={note?._id}
      >
        <div className="text-gray-900">
          <p className="text-xl font-semibold">{note?.title}</p>
          <p className="text-xl font-semibold">{note?.color}</p>
          <p className="mb-5"> {note?.description}</p>
        </div>
        <div className="flex justify-end gap-3 text-sm text-gray-700">
          <p>{note?.description?.length}</p>
          {/* note? words count */}
          <p>{note?.updatedAt}</p>
          {/* <p>09:12PM</p> */}
        </div>
        <div className="flex gap-3 justify-end mt-3">
          <span
            className="cursor-pointer hover:text-gray-600 text-xl "
            onClick={() => {
                updateNote(note?._id);
            }}
            >
            <FaRegEdit />
          </span>
          <Tooltip content="Delete" placement="bottom">
          <span
            className="cursor-pointer hover:text-gray-600 text-xl "
            onClick={() => {
              deleteNote(note?._id)
              
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
