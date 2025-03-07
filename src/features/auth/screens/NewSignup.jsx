import React from "react";
import AuthLayout from "../../../Layout/AuthLayout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import CustomInput from "../../../Utils/CustomInput";
import CustomSelect from "../../../Utils/CustomSelect";
import Button from "../../../Utils/Button";
import { Link } from "react-router-dom";

// Course and Certificate options
const courses = [
  { value: "Java", label: "Java" },
  { value: "Python", label: "Python" },
  { value: "JavaScript", label: "JavaScript" },
  { value: "Web Development", label: "Web Development" },
  { value: "Cloud Computing", label: "Cloud Computing" },
  { value: "DevOps", label: "DevOps" },
  { value: "SQL", label: "SQL" },
];

const certificateOptions = [
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
];

const inputFields = [
  { name: "name", type: "text" },
  { name: "surname", type: "text" },
  { name: "college", type: "text" },
  { name: "branch", type: "text" },
  { name: "year", type: "number" }, // or "text" if free-form input
  { name: "email", type: "email" },
  { name: "mobile", type: "number" },
];

// Validation schema
const validData = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  surname: z
    .string()
    .min(3, { message: "Surname must be at least 3 characters" }),
  college: z
    .string()
    .min(2, { message: "College must be at least 3 characters" }),
  branch: z
    .string()
    .min(3, { message: "Branch must be at least 3 characters" }),
  year: z
    .string()
    .length(4, { message: "Year must be at least 4 characters" })
    .regex(/^[0-9]+$/, { message: "Year must contain only digits" }),
  email: z.string().email({ message: "Enter a valid email" }),
  mobile: z
    .string()
    .length(10, { message: "Enter a valid 10-digit mobile number" })
    .regex(/^[0-9]+$/, { message: "Mobile number must contain only digits" }),
  course: z.string().min(1, { message: "Please select a course" }),
  certificate: z
    .string()
    .min(1, { message: "Please select a certificate option" }),
});

export default function NewSignup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: zodResolver(validData),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <AuthLayout>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-6"
      >
        <div className="text-center">
          <h2 className="font-bold text-2xl mb-2">Welcome to Nuhvin Learn</h2>
          <p className="text-gray-600">
            Please fill in your details to create an account
          </p>
        </div>

        {inputFields.map((field, index) => (
          <CustomInput
            type={field.type}
            key={index}
            label={
              field.name.charAt(0).toUpperCase() + field.name.slice(1) + " *"
            }
            {...register(field.name)}
            error={errors[field.name]}
          />
        ))}

        <CustomSelect
          label="Select Course *"
          options={courses}
          error={errors.course}
          {...register("course")}
        />

        <CustomSelect
          label="Certificate Required? *"
          options={certificateOptions}
          error={errors.certificate}
          {...register("certificate")}
        />

        <Button
          title="Sign Up"
          type="submit"
          customBtnStyles={`w-full max-w-lg disabled:bg-blue-200`}
          disabled={isSubmitting || !isValid}
        />

        <div className="flex gap-1">
          <span className="text-gray-600">Already have an account?</span>
          <Link to="/login" className="text-blue-500 font-medium">
            Log In
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}
