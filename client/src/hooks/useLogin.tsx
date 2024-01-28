import axios, { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import * as yup from "yup";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

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
    .matches(
      /^(?=.*[A-Z])(?=.*[.!@#$%^&*])(?=.*[a-z])(?=.*[0-9]){8,}/,
      "Must contain at least one uppercase letter, one special character (!@#$%^&*), one lowercase letter and one number"
    ),
});

const demoLoginData: FormValues = {
  email: import.meta.env.VITE_DEMO_EMAIL as string,
  password: import.meta.env.VITE_DEMO_PASSWORD as string,
};

const useLogin = () => {
  const handleDemoLogin = () => {
    handleLogin(demoLoginData);
  };
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [isDemoLoading, setIsDemoLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const handleLogin = async (values: FormValues) => {
    try {
      const { data } = await axios({
        method: "post",
        url: import.meta.env.VITE_PRODUCTION_API_LINK + "user/login",
        data: values,
      });
      toast.success(data?.message);
      console.log(data);
      const userDate = {
        userId: data?.user._id,
        userName: data?.user.userName,
        userToken: data?.userToken,
      };
      data && setUser!(userDate);
      sessionStorage.setItem("userData", JSON.stringify(userDate));
      navigate("/notes");
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        toast.error(error?.response?.data?.message);
      }
    } finally {
      setIsLoginLoading(false);
      setIsDemoLoading(false);
    }
  };
  return {
    initialValues,
    loginSchema,
    demoLoginData,
    setIsDemoLoading,
    handleDemoLogin,
    isLoginLoading,
    isDemoLoading,
    handleLogin,
  };
};

export default useLogin;
