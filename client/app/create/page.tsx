"use client";
import axios from "axios";
import { Field, Form, Formik,  } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";



const Create = () => {

const router = useRouter()

async function createNote(values: {}) {
  try {
    const { data } = await axios({
      method: "post",
      url: "http://localhost:8080/note",
      headers: {
        Authorization:
          "noteSecret eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1lZTk5ODczMUBnbWFpbC5jb20iLCJfaWQiOiI2NTRkMzVjZjAzZjZjMGI2MjQ5YmI0NTUiLCJpYXQiOjE2OTk1NTkwNTF9.T7dN9CzHNZPHMMB4xz0mw8Lzw7ivndX4XCfp_1DyA7Q",
      },
      data: values
    });
    console.log(data)
    if(data.message==="note added successfully"){
      router.push("/notes")
    }
  } catch (error) {
    console.error("Error fetching notes:", error);
  }
}
interface FormValues {
  title: string;
  description: string;
  color: "yellow" | "green" | "purple" ;
}

const initialValues: FormValues = {
  title: "",
  description: "",
  color: "yellow",
};

  return (
    <section className="container ">
      <div className=" border  border-gray-200 glass shadow-2xl rounded-lg p-9 w-3/4 mx-auto m-5 ">
        {/* <div className="flex justify-end cursor-pointer">
  <button>X</button>
</div> */}

        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values);
            createNote(values)
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
                rows={10}
                className="block rounded-lg border resize-none	 border-gray-300 
    bg-gray-50 text-sm outline-none text-gray-900  ring-blue-400 focus:border-blue-500 focus:ring-2 w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your note here "
              ></Field>
            </div>

            <div className="mb-6">
              <h3 className="block dark:text-white font-semibold mb-2">
                Choose note color
              </h3>
              <Field name="color" as="select" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="purple">Purple</option>
              </Field>

            </div>
            <div className="flex gap-3">
              <button
                className="px-5 py-2.5 bg-yellow-300 rounded-lg font-semibold "
                type="submit"
              >
                save
              </button>
              <button className="px-5 py-2.5 bg-yellow-300 rounded-lg font-semibold ">
                Update
              </button>
              <button className="px-5 py-2.5 bg-yellow-300 rounded-lg font-semibold ">
                Delete 
              </button>
              <Link
                href={"/notes"}
                className="px-5 py-2.5 bg-yellow-300 rounded-lg font-semibold "
              >
                cancel
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default Create;
