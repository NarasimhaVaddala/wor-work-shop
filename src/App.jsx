import { ToastContainer } from "react-toastify";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./features/auth/screens/Login";
import ProtectedRoute from "./Layout/ProtectedRoute";
import Layout from "./Layout/Layout";
import DashboardScreen from "./features/dashboard/screens/DashboardScreen";
import FilterScreen from "./features/dashboard/screens/FilterScreen";

import DummyScreen from "./features/dashboard/screens/dummy";
import SignUp from "./features/auth/screens/SignUp";
import NewSignup from "./features/auth/screens/NewSignup";

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
        <Route path="/new" element={<NewSignup />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<DashboardScreen />} />
            <Route path="/filter-screen" element={<FilterScreen />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
