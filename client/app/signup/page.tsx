"use client";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik, useFormikContext } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast,{ Toaster } from "react-hot-toast";
import * as yup from "yup";

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

// yup validation schhema
const signupSchema = yup.object({
  userName: yup
    .string()
    .min(3, "name must be between 3 and 15 charchter")
    .max(15, "name must be between 3 and 15 charchter")
    .required("This field is required"),
  email: yup.string().email().required("This field is required"),
  password: yup
    .string()
    .required("password is required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-z]/, "Password can only contain Latin letters."),
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
        className="disabled:opacity-50 disabled:cursor-not-allowed p-2.5 bg-blue-500 rounded-full w-[50%] text-center inline-block text-white hover:bg-blue-600 focus:ring ring-blue-300"
      >
        Signup
      </button>
    </div>
  );
};

//TODO trim email value/**************************** */
export default function Signup() {
 const router = useRouter()

const handleSignup =async (values:FormValues)=>{
  try{const {data}= await axios({
    method: "post",
    url: "http://localhost:8080/user/signUp",
    data: values}
   )
   toast.success(data?.message)
  //  !****************
   router.push('/notes')
   
  }catch(error:any){
    toast.error(error.response.data.message)
   }
  }

  return (
    <section className="container mx-auto">
      <Toaster position="top-center"/>
      <div className="text-center text-xl font-semibold">Sign up</div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          handleSignup(values)
        }}
        validationSchema={signupSchema}
      >
        <Form className="mt-20 p-10 rounded-lg  glass sm:w-[50%] xs:w-[80%] mx-auto">
          <div className="mb-6">
            <label className="block dark:text-white  mb-3 ">
              Name
              </label>
              <Field
                required
                type="text"
                name="userName"
                className="block rounded-lg border border-gray-300 
              bg-gray-50  outline-none text-gray-900  ring-blue-400 focus:border-blue-500 focus:ring-2 w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your name"
              />
              <ErrorMessage
                name="userName"
                component="div"
                className="text-red-500"
              />
          </div>

          <div className="mb-6">
            <label className="block dark:text-white  mb-3">
              Email
              </label>
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
            {/* {props.touched.email&&props.errors.email&&<p className="text-red-500">{errors.email}</p>} */}
          </div>

          <div className="mb-6">
            <label className="block dark:text-white  mb-3">
              Password
              </label>
              <Field
                required
                name="password"
                type="password"
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

          <div className="mb-6">
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
              />
              <ErrorMessage
                name="cPassword"
                component="div"
                className="text-red-500"
              />

          </div>
          <p className="my-3 dark:text-white">
            Do you have already an account ?
            <Link href="/login" className="text-blue-400 underline">
              Log in
            </Link>
          </p>

          <SignupButton />
        </Form>
      </Formik>
    </section>
  );
}

{
  /* <div className="flex justify-center">

 <button

   type="submit"
   className="disabled:opacity-50 disabled:cursor-not-allowed p-2.5 bg-blue-500 rounded-full w-[50%] text-center inline-block text-white hover:bg-blue-600 focus:ring ring-blue-300"
 >
   Signup
 </button>
</div> */
}
