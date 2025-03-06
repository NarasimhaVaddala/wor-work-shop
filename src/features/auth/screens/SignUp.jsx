import React from "react";
import AuthLayout from "../../../Layout/AuthLayout";
import CustomInput from "../../../Utils/CustomInput";
import { Link } from "react-router-dom";
import Button from "../../../Utils/Button";
import CustomSelect from "../../../Utils/CustomSelect";

export default function SignUp() {
  const formData = [
    {
      label: "Name *",
      type: "text",
    },
    {
      label: "Surname *",
      type: "text",
    },
    {
      label: "College Name *",
      type: "text",
    },
    {
      label: "Branch *",
      type: "text",
    },
    {
      label: "Year *",
      type: "text",
    },
    {
      label: "Email *",
      type: "email",
    },
    {
      label: "Mobile *",
      type: "tel",
    },
  ];

  const courses = [
    { value: "Java", label: "Java" },
    { value: "Python", label: "Python" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "Web Development", label: "Web Development" },
    { value: "Cloud Computing", label: "Cloud Computing" },
    { value: "DevOps", label: "DevOps" },
    { value: "SQL", label: "SQL" },
  ];

  const certificate = [
    {
      value: "Yes",
      label: "Yes",
    },
    {
      value: "No",
      label: "No",
    },
  ];

  return (
    <AuthLayout>
      <div className="flex flex-col items-center gap-6">
        <div className="text-center justify-center">
          <h2 className="font-bold text-2xl mb-2">Welcome to Nuhvin Learn</h2>
          <p className="text-gray-600">
            Please Fill the above details to Create Account
          </p>
        </div>

        <div className="w-full max-w-xs space-y-4">
          {formData.map((e, index) => (
            <CustomInput key={index} label={e.label} type={e.type} />
          ))}

          <CustomSelect label={"Courses"} options={courses} />
          <CustomSelect
            label={"Certification Required"}
            options={certificate}
          />

          <Button title="Login" customBtnStyles="w-full" />
        </div>

        <div className="flex gap-1">
          <span className="text-gray-600">Don't have an account?</span>
          <Link className="text-blue-500 font-medium">Sign Up</Link>
        </div>
      </div>
    </AuthLayout>
  );
}
