"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";


const Notes = () => {
  const [notes, setNotes] = useState([]);

  async function getAllNotes() {
    try {
      const { data } = await axios.get("http://localhost:8080/note", {
        headers: {
          Authorization:
            "noteSecret eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1lZTk5ODczMUBnbWFpbC5jb20iLCJfaWQiOiI2NTRkMzVjZjAzZjZjMGI2MjQ5YmI0NTUiLCJpYXQiOjE2OTk1NTkwNTF9.T7dN9CzHNZPHMMB4xz0mw8Lzw7ivndX4XCfp_1DyA7Q",
        },
      });

      setNotes(data.notes);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  }

  getAllNotes();

  type Note = {
    _id: string;
    title: string;
    description: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
  };

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
          <button className="px-5 py-2.5 bg-yellow-300 rounded-lg font-semibold hover:bg-yellow-400">
            Update
          </button>
        </div>

        {/* <!-- input modal --> */}

        <div className="continer my-3 p-10 ">
          <div className="inline-grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 gap-3 ">
            {/* <!-- note body -->
<!-- cursor pointer to update? --> */}

            {notes.map((note: Note) => (
              <div
                className="shadow-lg bg-yellow-200 rounded-lg p-5 flex flex-col "
                key={note?._id}
              >
                <div className="text-gray-900">
                  <p className="text-xl font-semibold">{note?.title}</p>
                  <p className="mb-5"> {note?.description}</p>
                </div>
                <div className="flex justify-end gap-3 text-sm text-gray-700">
                  <p>{(note?.description)?.length}</p>
                  {/* note? words count */}
                  <p>{note?.updatedAt}</p>
                  {/* <p>09:12PM</p> */}
                </div>
                <div className="flex gap-3 justify-end mt-3">
                  <span><FaRegEdit/></span> <span><AiFillDelete/></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Notes;
