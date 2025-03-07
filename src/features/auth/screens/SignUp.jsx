import React, { useState } from "react";
import AuthLayout from "../../../Layout/AuthLayout";
import CustomInput from "../../../Utils/CustomInput";
import { Link } from "react-router-dom";
import Button from "../../../Utils/Button";
import CustomSelect from "../../../Utils/CustomSelect";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    college: "",
    branch: "",
    year: "",
    email: "",
    mobile: "",
    courses: "",
    certification: "",
  });

  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateMobile = (mobile) => /^[0-9]{10}$/.test(mobile);

  const validateForm = () => {
    const newErrors = {};

    // Validate required text fields
    ["name", "surname", "college", "branch", "year"].forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required";
      }
    });

    // Validate email
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Validate mobile
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!validateMobile(formData.mobile)) {
      newErrors.mobile = "Invalid mobile number (must be 10 digits)";
    }

    // Validate course selection
    if (!formData.courses) {
      newErrors.courses = "Please select a course";
    }

    // Validate certification
    if (!formData.certification) {
      newErrors.certification = "Please select certification preference";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    console.log("btn clicked", formData);

    if (validateForm()) {
      // Simulate form submission
      console.log("Form submitted successfully", formData);
      // Reset form after submission
      setFormData({
        name: "",
        surname: "",
        college: "",
        branch: "",
        year: "",
        email: "",
        mobile: "",
        courses: "",
        certification: "",
      });
      setErrors({});
      setFormSubmitted(false);
    }
  };

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

  return (
    <AuthLayout>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-6"
      >
        <div className="text-center">
          <h2 className="font-bold text-2xl mb-2">Welcome to Nuhvin Learn</h2>
          <p className="text-gray-600">
            Please fill in your details to create an account
          </p>
        </div>

        <div className="w-full max-w-lg space-y-4">
          {/* Text Inputs */}
          {["name", "surname", "college", "branch", "year"].map((field) => (
            <CustomInput
              key={field}
              label={field.charAt(0).toUpperCase() + field.slice(1) + " *"}
              type="text"
              value={formData[field]}
              onChange={(e) =>
                setFormData({ ...formData, [field]: e.target.value })
              }
              error={formSubmitted ? errors[field] : undefined}
            />
          ))}

          {/* Email Input */}
          <CustomInput
            label="Email *"
            type="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
            error={formSubmitted ? errors.email : undefined}
          />

          {/* Mobile Input */}
          <CustomInput
            label="Mobile *"
            type="number"
            value={formData.mobile}
            onChange={(e) =>
              setFormData({ ...formData, mobile: e.target.value })
            }
            error={formSubmitted ? errors.mobile : undefined}
          />

          {/* Courses Select */}
          <CustomSelect
            label="Courses *"
            options={courses}
            value={formData.courses}
            onChange={(e) =>
              setFormData({ ...formData, courses: e.target.value })
            }
            error={formSubmitted ? errors.courses : undefined}
          />

          {/* Certification Select */}
          <CustomSelect
            label="Certification Required *"
            options={certificateOptions}
            value={formData.certification}
            onChange={(e) =>
              setFormData({ ...formData, certification: e.target.value })
            }
            error={formSubmitted ? errors.certification : undefined}
          />
        </div>

        <Button
          title="Sign Up"
          type="submit"
          customBtnStyles="w-full max-w-lg"
          disabled={Object.keys(errors).length > 0 && formSubmitted}
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
