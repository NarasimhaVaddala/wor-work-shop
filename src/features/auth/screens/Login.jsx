import AuthLayout from "../../../Layout/AuthLayout";
import CustomInput from "../../../Utils/CustomInput";
import { Link } from "react-router-dom";
import Button from "../../../Utils/Button";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    const newErrors = {};

    // Validate email
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (Object.keys(newErrors).length === 0) {
      // Simulate successful login
      console.log("Form submitted successfully:", formData);
      // Reset form after submission
      setFormData({ email: "", password: "" });
      setFormSubmitted(false);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <AuthLayout>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-6"
      >
        <div className="text-center">
          <h2 className="font-bold text-2xl mb-2">Welcome back!</h2>
          <p className="text-gray-600">Log in with your email</p>
        </div>

        <div className="w-full max-w-lg space-y-4">
          {/* Email Input */}
          <CustomInput
            label="Email *"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            error={formSubmitted ? errors.email : undefined}
          />

          {/* Password Input */}
          <CustomInput
            label="Password *"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            error={formSubmitted ? errors.password : undefined}
          />

          <div className="flex justify-end">
            <Link to="/forgot-password" className="text-blue-500 text-sm">
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <Button
            title="Login"
            type="submit"
            customBtnStyles="w-full"
            disabled={Object.keys(errors).length > 0 && formSubmitted}
          />
        </div>

        <div className="flex gap-1">
          <span className="text-gray-600">Don't have an account?</span>
          <Link to="/signup" className="text-blue-500 font-medium">
            Sign Up
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
