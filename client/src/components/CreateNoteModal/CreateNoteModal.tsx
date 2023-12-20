import React from "react";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { Field, Form, Formik } from "formik";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";

type createNoteModalProps = {
  getAllNotes: () => Promise<void>;
};
const userToken: string = Cookies.get("userToken") as string;

const CreateNoteModal = ({ getAllNotes }: createNoteModalProps) => {
  async function createNote(values: object) {
    try {
      const { data } = await axios({
        method: "post",
        url: `${import.meta.env.VITE_PRODUCTION_API_LINK}note`,
        headers: {
          Authorization:
            (import.meta.env.VITE_TOKEN_PREFIX as string) + " " + userToken,
        },

        data: values,
      });
      toast.success("done");

      if (data.message === "note added successfully") {
        getAllNotes?.();
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        toast.error(error?.response?.data?.message);
      }
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
  const [titleCount, setTitleCount] = useState(50);
  const [descriptionCount, setDescriptionCount] = useState(200);

  const updateTitleCount = (value: string) => {
    setTitleCount(50 - value.length);
  };

  const updateDescriptionCount = (value: string) => {
    setDescriptionCount(200 - value.length);
  };

  return (
    <>
      <Button
        className="bg-indigo-700 font-semibold hover:!bg-indigo-800"
        onClick={() => setOpenModal(true)}
      >
        Create note
      </Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header> </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              createNote(values);
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
                  className={`text-right pt-1 px-3 ${
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
                  required
                  as="textarea"
                  name="description"
                  cols={30}
                  rows={6}
                  maxLength={200}
                  onKeyUp={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                    updateDescriptionCount(e.target.value);
                  }}
                  className="block  rounded-lg border resize-none border-gray-300 
                bg-gray-50 text-sm outline-none text-gray-900  ring-blue-400 focus:border-blue-500 focus:ring-2 w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your note here "
                ></Field>
                <div>
                  <p
                    className={`text-right pt-1 px-3 ${
                      descriptionCount <= 0 ? "text-red-600" : "text-green-600"
                    }`}
                  >
                    {descriptionCount}
                  </p>
                </div>
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
                  className=" bg-indigo-700 hover:!bg-indigo-800 "
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

export default CreateNoteModal;
