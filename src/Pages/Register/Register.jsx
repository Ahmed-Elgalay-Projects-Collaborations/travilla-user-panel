import { Button } from "@heroui/button";
import { Input } from "@heroui/react";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios, { AxiosError } from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
// import { Alert } from "@heroui/react";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";
export default function Register() {
  const [IsLoading, setIsLoading] = useState(false);
  const navigator = useNavigate();
  const [Error, setError] = useState("");

  const initialValues = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
    phone: "",
  };

  const onSubmit = () => {
    setIsLoading(true);
    setError("");
    <Navigate to="/" />;
    axios.post("http://localhost:5000/api/users/register", values)
      .then((res) => {
        console.log(res);
        navigator("/login");
        setIsLoading(false);

      })
      .catch((error) => {
        console.log(error);
        setError(error.response.data.message);

      })
      .finally(() => {
        setIsLoading(false);
      });

    
  };

  const Req_field = "This field is required";

  const validationSchema = yup.object({
    name: yup
      .string()
      .required(Req_field)
      .min(3, "Minimum number of characters is 3")
      .max(20, "Maximum number of characters is 20"),
    email: yup.string().email().required(Req_field),
    password: yup
      .string()
      .required(Req_field)
      .matches(
        /^(?=.*\d.*)(?=.*[a-zA-Z].*)(?=.*[!#\$%&\?].*).{8,}$/,
        "At least 1 digit, 1 spicial character, it must be more than 8 characterss "
      ),
    rePassword: yup
      .string()
      .required(Req_field)
      .oneOf([yup.ref("password"), "Password does not match "]),
    phone: yup
      .string()
      .required(Req_field)
      .matches(/^01[0-2]\d{1,8}$/, "Invalid number"),
  });

  const {
    handleChange,
    errors,
    values,
    touched,
    handleBlur,
    handleReset,
    handleSubmit,
  } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });


          
       

  return (
    <>
      <div className="flex justify-center items-start  bg-gray-50 p-4">
        <div className="w-full max-w-5xl ">
        <div className=" my-10   ">
            <form
              onSubmit={handleSubmit}
              className="md:w-[75%] sm:w-[80%] lg:w-[60%] my-5 mx-auto grid gap-4 md:grid-cols-1  border border-x-medium rounded-md shadow-lg p-6 "
            >
              {/* {Error && (
            <div className="flex items-center justify-center w-full">
              <div className="flex flex-col w-full">
                {["danger"].map((color) => (
                  <div key={color} className="w-full flex items-center my-3">
                    <Alert color={color} title={`   ${Error}`} />
                  </div>
                ))}
              </div>
            </div>
          )} */}
              <Input
                isInvalid={touched.name && errors.name}
                errorMessage={errors.name}
                onBlur={handleBlur}
                value={values.name}
                onChange={handleChange}
                name="name"
                variant="underlined"
                className="md:col-span-1   "
                label="User Name"
                placeholder="Enter your name"
                type="name"
              />
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

              <Input
                isInvalid={touched.rePassword && errors.rePassword}
                errorMessage={errors.rePassword}
                onBlur={handleBlur}
                value={values.rePassword}
                onChange={handleChange}
                name="rePassword"
                variant="underlined"
                className="md:col-span-1  "
                label="RePassword"
                placeholder="Enter your Password"
                type="password"
              />

              <Input
                isInvalid={touched.phone && errors.phone}
                errorMessage={errors.phone}
                onBlur={handleBlur}
                value={values.phone}
                onChange={handleChange}
                name="phone"
                variant="underlined"
                className="md:col-span-1   "
                label="Phone"
                placeholder="Enter your Phone"
                type="tel"
              />
              <Button
                isLoading={IsLoading}
                type="submit"
                className="md:col-span-1   mt-5 bg-gradient-to-tr from-[#00b7eb] to-[#f4a460] text-white shadow-lg  "
                radius="full"
              >
                <span className=" text-lg ">Register</span>
              </Button>

              <div className="md:col-span-1   text-center">
                <p className=" ">
                  Alredy have an account?
                  <Link to="/login">
                    <span className="hover:underline text-blue-700 ps-3 ">
                      Log In
                    </span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
