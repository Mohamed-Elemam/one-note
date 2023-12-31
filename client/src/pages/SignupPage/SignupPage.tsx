import axios, { AxiosError } from "axios";
import { ErrorMessage, Field, Form, Formik, useFormikContext } from "formik";
import toast, { Toaster } from "react-hot-toast";
import * as yup from "yup";
import LoadingButton from "../../components/LoadingButton/LoadingButton";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface FormValues {
  userName: string;
  email: string;
  password: string;
  cPassword: string;
}
const initialValues: FormValues = {
  userName: "",
  email: "",
  password: "",
  cPassword: "",
};

const signupSchema = yup.object({
  userName: yup
    .string()
    .trim()
    .min(3, "name must be between 3 and 15 character")
    .max(15, "name must be between 3 and 15 character")
    .required("This field is required"),
  email: yup.string().trim().email().required("This field is required"),
  password: yup
    .string()
    .required("password is required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(
      /^(?=.*[A-Z])(?=.*[.!@#$%^&*])(?=.*[a-z])(?=.*[0-9]){8,}/,
      "Must contain at least one uppercase letter, one special character (!@#$%^&*), one lowercase letter and one number"
    ),
  cPassword: yup
    .string()
    .oneOf([yup.ref("password")], "password must match")
    .required("This field is required"),
});

const SignupButton = () => {
  const formik = useFormikContext();
  return (
    <div className="flex justify-center">
      <button
        disabled={!(formik.isValid && formik.dirty)}
        type="submit"
        className="w-full disabled:opacity-50 disabled:cursor-not-allowed block rounded-lg bg-indigo-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-700 focus-visible:ring active:bg-indigo-600 md:text-base"
      >
        Signup
      </button>
    </div>
  );
};

export default function Signup() {
  const [isSignupLoading, setIsSignupLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (values: FormValues) => {
    try {
      const { data } = await axios({
        method: "post",
        url: import.meta.env.VITE_PRODUCTION_API_LINK + "user/signUp",
        data: values,
      });
      sessionStorage.setItem("userToken", data?.userToken);
      toast.success(data?.message);
      navigate("/notes");
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.log(error);
        toast.error(error?.response?.data?.message);
      }
    } finally {
      setIsSignupLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign up | oneNote</title>
      </Helmet>
      <section className="container mt-10 px-4 md:px-8  mx-auto max-w-screen-2xl padding-top">
        <Toaster position="top-center" />

        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
          Signup
        </h2>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            setIsSignupLoading(true);

            handleSignup(values);
          }}
          validationSchema={signupSchema}
        >
          <Form className="mx-auto max-w-lg rounded-lg border">
            <div className="flex flex-col gap-4 p-4 md:p-8">
              <div>
                <label className="block dark:text-white  mb-3 ">Name</label>
                <Field
                  required
                  type="text"
                  name="userName"
                  className="block rounded-lg border border-gray-300 
                bg-gray-50  outline-none text-gray-900  ring-blue-400 focus:border-blue-500 focus:ring-2 w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your name"
                  autoComplete="current-name"
                />
                <ErrorMessage
                  name="userName"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div>
                <label className="block dark:text-white  mb-3">Email</label>
                <Field
                  required
                  type="email"
                  name="email"
                  className="block rounded-lg border border-gray-300 
                bg-gray-50  outline-none text-gray-900 ring-blue-400 focus:border-blue-500 focus:ring-2 w-full p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email address"
                  autoComplete="current-email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div>
                <label className="block dark:text-white  mb-3">Password</label>
                <Field
                  required
                  name="password"
                  type="password"
                  className="block rounded-lg border border-gray-300 
          bg-gray-50  outline-none text-gray-900 ring-blue-400 focus:border-blue-500 focus:ring-2 w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div>
                <label className="block dark:text-white  mb-3">
                  Confirm password
                </label>
                <Field
                  required
                  name="cPassword"
                  type="password"
                  className="block rounded-lg border border-gray-300 
                bg-gray-50  outline-none text-gray-900 ring-blue-400 focus:border-blue-500 focus:ring-2 w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                />
                <ErrorMessage
                  name="cPassword"
                  component="div"
                  className="text-red-500"
                />
              </div>
              {isSignupLoading ? <LoadingButton /> : <SignupButton />}
            </div>
            <div className="flex items-center justify-center bg-gray-100 p-4">
              <p className="text-center text-sm text-gray-500">
                Do you have already an account ?
                <Link to="/login" className="text-blue-400 underline">
                  Log in
                </Link>
              </p>
            </div>
          </Form>
        </Formik>
      </section>
    </>
  );
}
