import Reactб, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
// import pages
import Home from "../pages/Home";
import News from "../pages/News";
import Profile from "../pages/Profile";
import Header from "../components/Header/Header";
import Login from "../pages/auth/Login";

export default function XRoute() {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("auth");

  useEffect(() => {
    if (isAuth === null) {
      navigate("/profile");
    }
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
