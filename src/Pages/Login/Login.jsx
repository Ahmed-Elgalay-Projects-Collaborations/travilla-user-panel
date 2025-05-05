import { Button } from "@heroui/button";
import { Input } from "@heroui/react";
import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { ErrorMessage, useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Alert } from "@heroui/react";
import { useLocation } from "react-router-dom";
import { authContext } from "../../Contexts/Auth";
// import Home from "../UserPages/Home/Home";
import { Bounce, toast } from "react-toastify";

export default function Login() {
  

  const [IsLoading, setIsLoading] = useState(false);
  const { IsLogedin, setIsLogedin } = useContext(authContext);
  const navigator = useNavigate();
  const [Error, setError] = useState("");
  const location = useLocation();
  const showAlert = location.state?.from;

  const initialValues = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
    phone: "",
  };

  const onSubmit = async (values) => {
    setIsLoading(true);
    setError("");

    axios
      .post("{{base_url}}/users/login", values)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        setIsLogedin(true);
        navigator("/");

        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      })
      .catch((error) => {
        console.error(error);
        setError(error.response.data.message);

        toast.error(error.response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      })
      .finally(() => {
        setIsLoading(false);
      });

    setIsLoading(false);


  };

  const Req_field = "This field is required";

  const validationSchema = yup.object({
    email: yup.string().email().required(Req_field),
    password: yup
      .string()
      .required(Req_field)
      .matches(
        /^(?=.*\d.*)(?=.*[a-zA-Z].*)(?=.*[!#\$%&\?].*).{8,}$/,
        "At least 1 digit, 1 spicial character, it must be more than 8 characterss "
      ),
  });

  const {
    handleChange,
    errors,
    values,
    touched,
    handleBlur,
    // handleReset,
    handleSubmit,
  } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  

  return (
    <>
    
      <div className=" my-10   ">
              <form
                onSubmit={handleSubmit}
                className="md:w-[75%] sm:w-[80%] lg:w-[60%] my-5 mx-auto grid gap-4 md:grid-cols-1 border border-x-medium rounded-md shadow-lg p-6  "
              >
                {showAlert && (
                  <div className="flex items-center justify-center w-full">
                    <div className="w-full flex items-center my-3">
                      <Alert color="danger" title="You must login first" />
                    </div>
                  </div>
                )}
                <Input
                  isInvalid={touched.email && errors.email}
                  errorMessage={errors.email}
                  onBlur={handleBlur}
                  value={values.email}
                  onChange={handleChange}
                  name="email"
                  variant="underlined"
                  className="md:col-span-1  "
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                />

                <Input
                  isInvalid={touched.password && errors.password}
                  errorMessage={errors.password}
                  onBlur={handleBlur}
                  value={values.password}
                  onChange={handleChange}
                  name="password"
                  variant="underlined"
                  className="md:col-span-1  "
                  label="Password"
                  placeholder="Enter your Password"
                  type="password"
                />



                <Button
                  isLoading={IsLoading}
                  type="submit"
                  className="md:col-span-1   mt-5 bg-gradient-to-tr from-[#00b7eb] to-[#f4a460] text-white shadow-lg  "
                  radius="full"
                >
                  <span className=" text-lg ">Login</span>
                </Button>

                <div className="md:col-span-1   text-center">
                  <p className=" ">
                    Don't have account yet?
                    <Link to="/register">
                      <span className="hover:underline text-blue-700 ps-3 ">
                        Sign Up
                      </span>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          
    </>
  );
}
