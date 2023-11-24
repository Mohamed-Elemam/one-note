import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { NoteCardData, userToken } from "@/app/notes/page";
import axios from "axios";
import { Tooltip } from "flowbite-react";

type NoteBodyProps = {
  note: NoteCardData;

  getAllNotes: () => Promise<void>; 
};

const NoteBody:React.FC<NoteBodyProps> = ({note ,getAllNotes}) => {
  
  async function deleteNote(noteId: string) {
    
    const { data } = await axios({
      method: "delete",
      url: "http://localhost:8080/note/?noteId=" + noteId,
      headers: {
        Authorization:
          (process.env.NEXT_PUBLIC_TOKEN_PREFIX as string) + " " + userToken,
      },
    });
    getAllNotes()

  }

  console.log( note) //************************************** */
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
    getAllNotes()

  }
function returnColorClass(color:string){
return `bg-${color}-200`
}

  return (
    <>
      <div
        className={`block max-w-sm p-6  border border-${note.color}-200 rounded-sm shadow hover:bg-${note.color}-100 dark:bg-${note.color}-800 dark:border-${note.color}-700 dark:hover:bg-${note.color}-700 `+ returnColorClass(note.color)}
      >
        <p className="mb-2 note-tilte text-gray-900 ">
          {note.title}
        </p>
        <p className=" text-gray-700  note-desc">
          {note.description}
        </p>
        <div className="flex justify-end gap-3 text-sm text-gray-700">
          {/* <p>{note?.description?.length}</p> */}
          <small>{note?.updatedAt.slice(0,10)}</small>
        </div>
        <div className="flex gap-3 justify-end mt-3">
          
          <Tooltip content="Update" placement="bottom">
            
            <span
              className="cursor-pointer hover:text-indigo-900 text-xl "
              onClick={() => {
                updateNote(note?._id);
                // getAllNotes()
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
