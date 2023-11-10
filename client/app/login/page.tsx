"use client"
import { ErrorMessage, Field, Form, Formik, useFormikContext } from "formik";
import Link from "next/link";
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

const LoginButton = () => {
  const formik = useFormikContext();

  return (
    <div className="flex justify-center">
      <button
        disabled={!(formik.isValid && formik.dirty)}
        type="submit"
        className="disabled:opacity-50 disabled:cursor-not-allowed p-2.5 bg-blue-500 rounded-full w-[50%] text-center inline-block text-white hover:bg-blue-600 focus:ring ring-blue-300"
      >
        Login
      </button>
    </div>
  );
};
export default function Home() {
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={loginSchema}
      >
        <Form className="mt-20  p-10 rounded-lg  glass w-[50%] mx-auto">
          <div className="mb-6">
            <label className="block dark:text-white font-semibold mb-2">
              Email
              <Field
                required
                type="email"
                name="email"
                className="block rounded-lg border border-gray-300 
        bg-gray-50 text-base outline-none text-gray-900 ring-blue-400 focus:border-blue-500 focus:ring-2 w-full p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your email address"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </label>
          </div>
          <div className="mb-6">
            <label className="block dark:text-white font-semibold mb-2">
              Password
            <Field
              required
              type="password"
              name='password'
              className="block rounded-lg border border-gray-300 
        bg-gray-50 text-sm outline-none text-gray-900 ring-blue-400 focus:border-blue-500 focus:ring-2 w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your password"
            />
             <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </label>
          </div>
          
          <p className="my-3 dark:text-white">
            Don&apos;t have an account ?
            <Link href="/signup" className="text-blue-400 underline">
              Sign up
            </Link>
          </p>
          <div className="flex justify-center"></div>
          <LoginButton/>
        </Form>
      </Formik>
    </>
  );
}
