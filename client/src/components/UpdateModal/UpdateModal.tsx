import React from "react";
import { Button, Modal } from "flowbite-react";
import { useState, useContext } from "react";
import axios, { AxiosError } from "axios";
import { Field, Form, Formik } from "formik";
import { Toaster, toast } from "react-hot-toast";
import { FaRegEdit } from "react-icons/fa";
import { NoteCardData } from "../../pages/NotesPage/NotesPage";
import { AuthContext } from "../../context/AuthContext";

type updateModalBodyProps = {
  getAllNotes: () => Promise<void>;
  note: NoteCardData;
};
const UpdateModal: React.FC<updateModalBodyProps> = ({ getAllNotes, note }) => {
  const [openModal, setOpenModal] = useState(false);
  const { userToken } = useContext(AuthContext);

  interface FormValues {
    title: string;
    description: string;
    color: string;
  }

  const initialValues: FormValues = {
    title: note.title,
    description: note.description,
    color: note.color,
  };

  async function updateNote(noteId: string, values: FormValues) {
    try {
      const { data } = await axios({
        method: "put",
        url:
          import.meta.env.VITE_PRODUCTION_API_LINK + "note/?noteId=" + noteId,
        headers: {
          Authorization:
            (import.meta.env.VITE_TOKEN_PREFIX as string) + " " + userToken,
        },
        data: values,
      });
      if (data.message === "note updated") {
        toast.success(data.message);
      }
      getAllNotes();
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        toast.error(error?.response?.data?.message);
      }
    }
  }

  const [titleCount, setTitleCount] = useState(50 - note?.title?.length);
  const [descriptionCount, setDescriptionCount] = useState(
    200 - note?.description?.length
  );

  const updateTitleCount = (value: string) => {
    setTitleCount(50 - value.length);
  };

  const updateDescriptionCount = (value: string) => {
    setDescriptionCount(200 - value.length);
  };

  return (
    <>
      <Toaster />
      <span
        className="cursor-pointer hover:text-indigo-900 text-xl "
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <FaRegEdit />
      </span>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header> </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              updateNote(note._id, values);
              getAllNotes();
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
                  maxLength={50}
                  onKeyUp={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                    updateTitleCount(e.target.value);
                  }}
                  className="block rounded-lg border border-gray-300 
                bg-gray-50 text-sm outline-none text-gray-900  ring-blue-400 focus:border-blue-500 focus:ring-2 w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter note title"
                />
                <p
                  className={`text-right  px-3 ${
                    titleCount <= 0 ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {titleCount}
                </p>
              </div>

              <div className="mb-6">
                <label className="block dark:text-white font-semibold mb-2 ">
                  Note
                </label>
                <Field
                  as="textarea"
                  name="description"
                  cols={30}
                  rows={6}
                  maxLength={200}
                  onKeyUp={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                    updateDescriptionCount(e.target.value);
                  }}
                  required
                  className="block rounded-lg border resize-none	 border-gray-300 
                bg-gray-50 text-sm outline-none text-gray-900  ring-blue-400 focus:border-blue-500 focus:ring-2 w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your note here "
                ></Field>
                <p
                  className={`text-right px-3 ${
                    descriptionCount <= 0 ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {descriptionCount}
                </p>
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
                  className=" !bg-indigo-700  hover:!bg-indigo-800 "
                >
                  Update
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

export default UpdateModal;
