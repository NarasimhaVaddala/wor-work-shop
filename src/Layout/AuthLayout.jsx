// AuthLayout.jsx
import { Link } from "react-router-dom";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Left Content Container */}
      <div className="lg:w-2/5 w-full flex flex-col justify-between p-8 overflow-y-auto">
        {/* Logo Section */}
        <div className="flex items-center gap-4 mb-8 w-full justify-center">
          <img
            src="https://cfaccounts.simplilearn.com/frontend/images/simplilearn-logo.png"
            alt="logo"
            className="h-10"
          />
          <div className="border-l border-black h-10 my-2" />
          <h2 className="text-lg font-semibold">
            Learning <br /> Platform
          </h2>
        </div>

        {/* Page-specific content */}
        <div className="flex-grow w-full max-w-md mx-auto">{children}</div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm mt-8">
          © 2009-2025 - Simplilearn Solutions. All Rights Reserved. | Privacy
          Policy
        </div>
      </div>

      {/* Right Image Section */}
      <div
        className="hidden lg:block lg:w-3/5 bg-gray-200 bg-cover bg-center fixed top-0 right-0 h-screen"
        style={{ backgroundImage: "url('loginright.png" }}
      />
    </div>
  );
};

export default AuthLayout;
