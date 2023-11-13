"use client";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik, useFormikContext } from "formik";
import Link from "next/link";
import { Toaster, toast } from "react-hot-toast";
import * as yup from "yup";

interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: "",
  password: "",
};

const loginSchema = yup.object({
  email: yup.string().email().required("This field is required"),
  password: yup
    .string()
    .required("password is required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-z]/, "Password can only contain Latin letters."),
});

const handleLogin = async (values: FormValues) => {
  try {
    const { data } = await axios({
      method: "post",
      url: "http://localhost:8080/user/login",
      data: values,
    });
    console.log(data);
    toast.success(data?.message);
  } catch (error: any) {
    toast.error(error.response.data.message);
  }
};

const LoginButton = () => {
  const formik = useFormikContext();

  return (
    <div className="flex justify-center">
      <button
        disabled={!(formik.isValid && formik.dirty)}
        type="submit"
        className="disabled:opacity-50 disabled:cursor-not-allowed p-2.5 bg-blue-500 rounded-2xl w-[50%] text-center inline-block text-white hover:bg-blue-600 focus:ring ring-blue-300"
      >
        Login
      </button>
    </div>
  );
};

const demoLoginData: FormValues = {
  email: process.env.NEXT_PUBLIC_DEMO_EMAIL,
  password: process.env.NEXT_PUBLIC_DEMO_PASSWORD,
};

const handleDemoLogin = () => {
  handleLogin(demoLoginData);
  console.log(demoLoginData)
};

export default function Home() {
  return (
    <div className="container  mt-20  p-10 rounded-lg  glass md:w-[50%] xs:w-[75%] mx-auto">
      <Toaster />

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          handleLogin(values);
        }}
        validationSchema={loginSchema}
      >
        <Form className=" ">
          <div className="mb-6">
            <label className="block dark:text-white  mb-2">Email</label>
            <Field
              required
              type="email"
              name="email"
              className="block rounded-lg border border-gray-300 
        bg-gray-50  outline-none text-gray-900 ring-blue-400 focus:border-blue-500 focus:ring-2 w-full p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your email address"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-6">
            <label className="block dark:text-white  mb-2">Password</label>
            <Field
              required
              type="password"
              name="password"
              className="block rounded-lg border border-gray-300 
        bg-gray-50  outline-none text-gray-900 ring-blue-400 focus:border-blue-500 focus:ring-2 w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500"
            />
          </div>

          <p className="my-3 dark:text-white">
            Don&apos;t have an account ?
            <Link href="/signup" className="text-blue-400 underline">
              Sign up
            </Link>
          </p>
          <div className="flex justify-center"></div>
          <LoginButton />

        </Form>
      </Formik>
      <div className="flex flex-col items-center justify-center">
            <p className="flex items-end justify-center my-4">
              <span className="w-6 h-1 bg-gray-600 inline-block mx-3 translate-y-[50%]"></span>
              or
              <span className="w-6 h-1 bg-gray-600 inline-block mx-3"></span>
              </p>
              <button
                onClick={() => {
                  handleDemoLogin
                }}
                className=" my-5 p-2.5 bg-blue-500 rounded-2xl w-[50%] text-center inline-block text-white hover:bg-blue-600 focus:ring ring-blue-300"
              >
                Demo login
              </button>
          </div>
    </div>
  );
}
