import { useFormikContext } from "formik";

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

export default LoginButton;
