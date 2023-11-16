import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { NoteCardData, userToken } from "@/app/notes/page";
import axios from "axios";
import { Tooltip } from "flowbite";
import Link from "next/link";

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
  <>
  <Link
    href="#"
    className={`block max-w-sm p-6 bg-white border border-${note.color}-200 rounded-lg shadow hover:bg-${note.color}-100 dark:bg-${note.color}-800 dark:border-${note.color}-700 dark:hover:bg-${note.color}-700`}
  >
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {note.title}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      {note.description}
    </p>
  </Link>
</>

    
    </>
  );
};

export default NoteBody;
