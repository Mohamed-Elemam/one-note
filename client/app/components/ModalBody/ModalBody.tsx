"use client";
import React from "react";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import { toast } from "react-hot-toast";
import { userToken } from "@/app/notes/page";



const NoteModalBody = ({ handleGetNotes }) => {

  async function createNote(values: {}) {
    try {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:8080/note",
        headers: {
          Authorization:
            (process.env.NEXT_PUBLIC_TOKEN_PREFIX as string) + " " + userToken,
        },
        data: values,
      });
      console.log(data);
      toast.success("done");

      if (data.message === "note added successfully") {
        handleGetNotes();
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error.response.data);
    }
  }

  interface FormValues {
    title: string;
    description: string;
    color: "yellow" | "green" | "purple";
  }

  const initialValues: FormValues = {
    title: "",
    description: "",
    color: "yellow",
  };

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Take note</Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header> </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              console.log(values);
              createNote(values);
              setOpenModal(false);
            }}
          >
            <Form>
              <div className="mb-6">
                <label className="block dark:text-white font-semibold mb-2 ">
                  Title
                </label>
                <Field
                  required
                  type="text"
                  name="title"
                  className="block rounded-lg border border-gray-300 
                bg-gray-50 text-sm outline-none text-gray-900  ring-blue-400 focus:border-blue-500 focus:ring-2 w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter note tilte"
                />
              </div>

              <div className="mb-6">
                <label className="block dark:text-white font-semibold mb-2 ">
                  Note
                </label>
                <Field
                  as="textarea"
                  name="description"
                  cols={30}
                  rows={9}
                  className="block rounded-lg border resize-none	 border-gray-300 
                bg-gray-50 text-sm outline-none text-gray-900  ring-blue-400 focus:border-blue-500 focus:ring-2 w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your note here "
                ></Field>
              </div>

              <div className="mb-6">
                <h3 className="block dark:text-white font-semibold mb-2">
                  Choose note color
                </h3>
                <Field
                  name="color"
                  as="select"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="yellow">Yellow</option>
                  <option value="green">Green</option>
                  <option value="purple">Purple</option>
                </Field>
              </div>

              <Modal.Footer>
                <Button
                  type="submit"
                  className=" bg-indigo-700  hover:bg-indigo-800 "
                >
                  Save
                </Button>
                <Button
                  color="indigo"
                  className="hover:hover:text-indigo-800"
                  onClick={() => setOpenModal(false)}
                >
                  Cancel
                </Button>
              </Modal.Footer>
            </Form>
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NoteModalBody;
