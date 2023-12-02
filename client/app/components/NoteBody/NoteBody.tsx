import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { NoteCardData, userToken } from "@/app/notes/page";
import axios from "axios";
import { Tooltip } from "flowbite-react";
import UpdateModal from "../UpdateModal/UpdateModal";
import { Toaster, toast } from "react-hot-toast";

type NoteBodyProps = {
  note: NoteCardData;
  getAllNotes: () => Promise<void>;
};

const NoteBody: React.FC<NoteBodyProps> = ({ note, getAllNotes }) => {
  async function deleteNote(noteId: string) {
  try {
    const { data } = await axios({
      method: "delete",
      url: process.env.NEXT_PUBLIC_PRDUCTION_API_LINK+"note/?noteId=" + noteId,
      headers: {
        Authorization:
          (process.env.NEXT_PUBLIC_TOKEN_PREFIX as string) + " " + userToken,
      },
    });
    if(data.message =="note deleted"){
      toast.success(data.message)
    }
    getAllNotes();
  } catch (error:any) {

    toast.error(error?.response.data);
  }
  }

  function returnColorClass(apiColor: string) {
    const colors: any = {
      yellow: "#fef08a",
      green: "#bbf7d0",
      purple: "#e9d5ff",
    };

    return colors[apiColor];
  }

  return (
    <>
    <Toaster/>
      <div
        style={{ backgroundColor: returnColorClass(note.color) }}
        className={` w-[15em] h-[15em] p-6 justify-around rounded-sm shadow  mx-auto flex flex-col  `}
      >
        <h2 className=" note-tilte text-gray-900 !text-3xl font-meduim break-all">
          {note.title}
        </h2>
        <p className=" text-gray-900  note-desc">{note.description}</p>

        <div className="flex justify-between   text-gray-800 items-center">
          <small>{note?.updatedAt.slice(0, 10)}</small>
          <div className="flex gap-3  ">
            <Tooltip content="Update" placement="bottom">
              <UpdateModal getAllNotes={getAllNotes} note={note} />
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
      </div>
    </>
  );
};

export default NoteBody;
