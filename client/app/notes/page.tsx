"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NoteBody from "../components/NoteBody/NoteBody";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import { Toaster, toast } from "react-hot-toast";
import CreateNoteModal from "../components/CreateNoteModal/CreateNoteModal";
import { getCookie  } from 'cookies-next';
import { redirect } from 'next/navigation'

export type NoteCardData = {
  _id: string;
  title: string;
  description: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  color: string;
};

let userToken: any = getCookie('userToken')
!getCookie('userToken') && redirect('/login');

const Notes = () => {
  const [notes, setNotes] = useState<NoteCardData[]>([]);
  const [loading, setLoading] = useState(false);
  
  async function getAllNotes() {
    try {
      setLoading(true);
      const { data } = await 
      axios.get(process.env.NEXT_PUBLIC_PRDUCTION_API_LINK+"note", 
      {
        headers: {
          Authorization:
            (process.env.NEXT_PUBLIC_TOKEN_PREFIX as string) + " " + userToken,
        },
      });
      setNotes(data.notes as NoteCardData[]);
    } catch (error: any) {
      toast.error(error?.response?.data.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllNotes();
  }, []);

    
  return (
    <>
      <Toaster />
      
      <section className="container mx-auto px-5 py-24 padding-top">
        <div className="justify-end flex p-5 gap-3">
          <CreateNoteModal getAllNotes={getAllNotes} />
        </div>

        <div className="container my-3 p-10 mx-auto ">
          {loading ? (
            <LoadingSpinner />
          ) : notes && notes.length ? (
            <div className="flex flex-wrap gap-3  ">
              {notes.map((note: NoteCardData) => (
                <NoteBody
                  note={note}
                  getAllNotes={getAllNotes}
                  key={note._id}
                />
              ))}
            </div>
          ) : (
            <div className="flex sm:text-[30px] text-indigo-900 md:text-4xl justify-center items-center text-center flex-col gap-3 font-medium">
              <p className="text-balance">
                No notes are available. <br /> Start creating new notes right
                now!
              </p>
          <CreateNoteModal getAllNotes={getAllNotes} />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Notes;
