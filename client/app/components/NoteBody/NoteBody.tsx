import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { NoteCardData } from "@/app/notes/page";
import axios from "axios";
import { Tooltip } from "flowbite-react";
import UpdateModal from "../UpdateModal/UpdateModal";
import { Toaster, toast } from "react-hot-toast";
import { getCookie } from "cookies-next";

let userToken: any = getCookie("userToken");

type NoteBodyProps = {
  note: NoteCardData;
  getAllNotes: () => Promise<void>;
};

const NoteBody: React.FC<NoteBodyProps> = ({ note, getAllNotes }) => {
  const [loading, setLoading] = useState(false);

  async function deleteNote(noteId: string) {
    try {
      setLoading(true);
      const { data } = await axios({
        method: "delete",
        url:
          process.env.NEXT_PUBLIC_PRDUCTION_API_LINK + "note/?noteId=" + noteId,
        headers: {
          Authorization:
            (process.env.NEXT_PUBLIC_TOKEN_PREFIX as string) + " " + userToken,
        },
      });
      if (data.message == "note deleted") {
        toast.success(data.message);
      }
      getAllNotes();
    } catch (error: any) {
      toast.error(error?.response.data);
    } finally {
      setLoading(false);
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
      <Toaster />
      <div
        style={{ backgroundColor: returnColorClass(note.color) }}
        className={` w-[15em] min-h-[15em] p-6 justify-around rounded-sm shadow flex flex-col  `}
      >
        <h2 className=" note-tilte text-gray-900 !text-3xl font-meduim ">
          {note.title}
        </h2>
        <p className=" text-gray-900  note-desc">{note.description}</p>

        <div className="flex justify-between   text-gray-800 items-center ">
          <small>{note?.updatedAt.slice(0, 10)}</small>
          <div className="flex gap-3 items-center">
            <Tooltip content="Update" placement="bottom">
              <UpdateModal getAllNotes={getAllNotes} note={note} />
            </Tooltip>
            <Tooltip content="Delete" placement="bottom">
              <span className="cursor-pointer hover:text-indigo-900 text-xl ">
                {loading ? (
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="block w-[18px] h-[18px] pointer-events-none text-indigo-900 animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#babfca"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                ) : (
                  <AiFillDelete
                    onClick={() => {
                      deleteNote(note?._id);
                    }}
                  />
                )}
              </span>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteBody;
