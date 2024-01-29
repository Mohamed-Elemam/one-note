import { ErrorMessage, Field, Form, Formik } from "formik";
import { Toaster } from "react-hot-toast";
import LoadingButton from "../../components/LoadingButton/LoadingButton";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useRegister";
import SignupButton from "../../components/SignupButton/SignupButton";

export default function Signup() {
  const {
    initialValues,
    signupSchema,
    handleSignup,
    isSignupLoading,
    setIsSignupLoading,
  } = useSignup();
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
