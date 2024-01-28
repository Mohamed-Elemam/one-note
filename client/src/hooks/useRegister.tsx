import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import * as yup from "yup";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

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

const useSignup = () => {
  const [isSignupLoading, setIsSignupLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const handleSignup = async (values: FormValues) => {
    try {
      const { data } = await axios({
        method: "post",
        url: import.meta.env.VITE_PRODUCTION_API_LINK + "user/signUp",
        data: values,
      });

      const userDate = {
        userId: data?.userInstance._id,
        userName: data?.userInstance.userName,
        userToken: data?.userToken,
      };
      data && setUser!(userDate);
      sessionStorage.setItem("userData", JSON.stringify(userDate));
      toast.success(data?.message);
      navigate("/notes");
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        toast.error(error?.response?.data?.message);
      }
    } finally {
      setIsSignupLoading(false);
    }
  };

  return {
    initialValues,
    signupSchema,
    handleSignup,
    isSignupLoading,
    setIsSignupLoading,
  };
};

export default useSignup;
