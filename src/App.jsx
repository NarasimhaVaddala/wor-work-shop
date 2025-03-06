import { ToastContainer } from "react-toastify";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./features/auth/screens/Login";
import ProtectedRoute from "./Layout/ProtectedRoute";
import Layout from "./Layout/Layout";
import DashboardScreen from "./features/dashboard/screens/DashboardScreen";
import DummyScreen from "./features/dashboard/screens/dummy";
import SignUp from "./features/auth/screens/SignUp";

function App() {
  return (
    <div className="flex flex-col w-full min-h-[100vh]">
      <ToastContainer
        position="top-right"
        autoClose={5000} // 5 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<DashboardScreen />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
