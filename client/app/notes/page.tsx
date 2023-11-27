"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NoteBody from "../components/NoteBody/NoteBody";
import jwt from "jsonwebtoken";
import Loading from "../components/Loading/Loading";
import { Toaster, toast } from "react-hot-toast";
import CreateNoteModal from "../components/CreateNoteModal/CreateNoteModal";

export type NoteCardData = {
  _id: string;
  title: string;
  description: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  color: string;
};

export const userToken: string = localStorage?.getItem("userToken") as string;
export const decodedToken = jwt.decode(userToken as string);

const Notes = () => {
  const [notes, setNotes] = useState<NoteCardData[]>([]);

  async function getAllNotes() {
    try {
      const { data } = await axios.get("http://localhost:8080/note", {
        headers: {
          Authorization:
            (process.env.NEXT_PUBLIC_TOKEN_PREFIX as string) + " " + userToken,
        },
      });
      console.log(12359);

      setNotes(data.notes as NoteCardData[]);
    } catch (error: any) {
      console.error("Error fetching notes:", error);
      toast.error(error.response.data);
    }
  }

  useEffect(() => {
    getAllNotes();
  }, []);

  return (
    <>
      <Toaster />
      <section className="container mx-auto px-5 py-24">
        <div className="justify-end flex p-5 gap-3">
          <CreateNoteModal getAllNotes={getAllNotes} />
        </div>

        <div className="continer my-3 p-10 mx-auto ">
          {notes && notes.length ? (
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-3 ">
              {notes.map((note: NoteCardData) => (
                <NoteBody
                  note={note}
                  getAllNotes={getAllNotes}
                  key={note._id}
                />
              ))}
            </div>
          ) : notes ? (
            <Loading />
          ) : (
            <div className="flex text-indigo-900 text-4xl justify-center items-center text-center font-medium">
              <p>
                No notes are available. <br /> Start creating new notes right
                now!
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Notes;
