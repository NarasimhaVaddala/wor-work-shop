// LoginPage.jsx
import AuthLayout from "../../../Layout/AuthLayout";
import CustomInput from "../../../Utils/CustomInput";
import { Link } from "react-router-dom";
import Button from "../../../Utils/Button";

const Login = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col items-center gap-6">
        <div className="text-center justify-center">
          <h2 className="font-bold text-2xl mb-2">Welcome back!</h2>
          <p className="text-gray-600">Log in with your email</p>
        </div>

        <div className="w-full max-w-xs space-y-4">
          <CustomInput label="Email *" type="text" />
          <CustomInput label="Password *" type="password" />

          <div className="flex justify-end">
            <Link className="text-blue-500 text-sm">Forgot Password?</Link>
          </div>

          <Button title="Login" customBtnStyles="w-full" />
        </div>

        <div className="flex gap-1">
          <span className="text-gray-600">Don't have an account?</span>
          <Link className="text-blue-500 font-medium">Sign Up</Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
