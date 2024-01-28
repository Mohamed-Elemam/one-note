import { ErrorMessage, Field, Form, Formik } from "formik";
import { Toaster } from "react-hot-toast";
import LoadingButton from "../../components/LoadingButton/LoadingButton";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import LoginButton from "../../components/LoginButton/LoginButton";

export default function LoginPage() {
  const {
    // LoginButton,
    initialValues,
    loginSchema,
    handleDemoLogin,
    isLoginLoading,
    isDemoLoading,
    setIsDemoLoading,
    handleLogin,
  } = useLogin();

  return (
    <>
      <Helmet>
        <title>Log in | oneNote</title>
      </Helmet>
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
                  autoComplete="current-email"
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
                  autoComplete="current-password"
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
                  to="/signup"
                  className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                >
                  Register
                </Link>
              </p>
            </div>
          </Form>
        </Formik>
      </section>
    </>
  );
}
