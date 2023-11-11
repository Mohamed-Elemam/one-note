"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import NoteBody from "../components/NoteBody/NoteBody";


export type NoteCardData = {
  _id: string;
  title: string;
  description: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  color:string
};

const Notes = () => {
  const [notes, setNotes] = useState<NoteCardData[]>([]);

  useEffect(() => {
    async function getAllNotes() {
      try {
        const { data } = await axios.get("http://localhost:8080/note", {
          headers: {
            Authorization:
              "noteSecret eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1lZTk5ODczMUBnbWFpbC5jb20iLCJfaWQiOiI2NTRkMzVjZjAzZjZjMGI2MjQ5YmI0NTUiLCJpYXQiOjE2OTk1NTkwNTF9.T7dN9CzHNZPHMMB4xz0mw8Lzw7ivndX4XCfp_1DyA7Q",
          },
        });
        console.log(data.notes)
        setNotes(data.notes as NoteCardData[]);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    }

    getAllNotes()
  }, []);



  return (
    <>
      <section className="container mx-auto px-5 py-24">
        {/* <!-- add note or update delete ? --> */}
        <div className="justify-end flex p-5 gap-3">
          <Link
            href={"/create"}
            className="px-5 py-2.5 bg-yellow-300 rounded-lg hover:bg-yellow-400 font-semibold "
          >
            Create note
          </Link>
          
        </div>

        {/* <!-- input modal --> */}

        <div className="continer my-3 p-10 ">
          <div className="inline-grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 gap-3 ">
            {/* <!-- note body -->
<!-- cursor pointer to update? --> */}

            {notes.map((note: NoteCardData) => (
        <NoteBody {...note} key={note._id}/> 
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Notes;
