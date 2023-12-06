"use client";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik, useFormikContext } from "formik";
import Link from "next/link";
import {  useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import * as yup from "yup";
import { useState } from "react";
import LoadingButton from "../components/LoadingButton/LoadingButton";
import { getCookie, setCookie } from "cookies-next";


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

const LoginButton = () => {
  const formik = useFormikContext();
  return (
    <div className="flex justify-center">
      <button
        disabled={!(formik.isValid && formik.dirty)}
        type="submit"
        className="w-full disabled:opacity-50 disabled:cursor-not-allowed block rounded-lg bg-indigo-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-700 focus-visible:ring active:bg-indigo-600 md:text-base"
      >
        Login
      </button>
    </div>
  );
};

const demoLoginData: FormValues = {
  email: process.env.NEXT_PUBLIC_DEMO_EMAIL as string,
  password: process.env.NEXT_PUBLIC_DEMO_PASSWORD as string,
};

export default function Home() {
  const router = useRouter();
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [isDemoLoading, setIsDemoLoading] = useState(false);

  const handleLogin = async (values: FormValues) => {
    try {
      const { data } = await axios({
        method: "post",
        url: process.env.NEXT_PUBLIC_PRDUCTION_API_LINK + "user/login",
        data: values,
      });
      toast.success(data?.message);
      setCookie("userToken", data.userToken);
      router.push("/notes");
    } catch (error: any) {
      toast.error(error.response.data.message);
    } finally {
      setIsLoginLoading(false);
      setIsDemoLoading(false);
    }
  };

  const handleDemoLogin = () => {
    handleLogin(demoLoginData);
  };

  if (getCookie("userToken")) router.push("/notes");


  return (
    <section className="container mt-10 mx-auto max-w-screen-2xl px-4 md:px-8 padding-top">
      <Toaster position="top-center" />

      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
        Login
      </h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          handleLogin(values);
        }}
        validationSchema={loginSchema}
      >
        <Form className="mx-auto max-w-lg rounded-lg border">
          <div className="flex flex-col gap-4 p-4 md:p-8">
            <div>
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
            <div>
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

            {isLoginLoading ? <LoadingButton /> : <LoginButton />}

            <div className="relative flex items-center justify-center">
              <span className="absolute inset-x-0 h-px bg-gray-300"></span>
              <span className="relative bg-white px-4 text-sm text-gray-400">
                OR
              </span>
            </div>
            {isDemoLoading ? (
              <LoadingButton />
            ) : (
              <button
                onClick={() => {
                  setIsDemoLoading(true);
                  handleDemoLogin();
                }}
                className=" block cursor-pointer rounded-lg bg-indigo-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-700 focus-visible:ring active:bg-indigo-600 md:text-base"
              >
                Demo login
              </button>
            )}
          </div>
          <div className="flex items-center justify-center bg-gray-100 p-4">
            <p className="text-center text-sm text-gray-500">
              Don&apos;t have an account?
              <Link
                href="/signup"
                className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                Register
              </Link>
            </p>
          </div>
        </Form>
      </Formik>
    </section>
  );
}
