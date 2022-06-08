import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userName, password } from "../../redux/user/UserSlice";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/auth/login.scss";

export default function Login() {
  const userState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginInput = (event) => {
    const str = event.target.value;
    dispatch(userName(str.split("")[0].toUpperCase() + str.slice(1)));
  };

  const handlePassInput = (event) => {
    dispatch(password(event.target.value));
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (userState.userName === "Admin" && userState.password === "12345") {
      localStorage.setItem("auth", JSON.stringify(true));
      navigate("/profile");
    } else {
      toast.error("Имя пользователя или пароль введены не верно");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="container login">
        <div className="login__wrapper">
          <form className="form" onSubmit={submitForm}>
            <h3>Форма авторизации</h3>
            <div className="form__group">
              <label htmlFor="in1">{"error"}</label>
              <input
                type="text"
                name="login"
                onChange={handleLoginInput}
                id="in1"
              />
            </div>
            <div className="form__group">
              <label htmlFor="in2">{"error"}</label>
              <input
                type="password"
                name="password"
                onChange={handlePassInput}
                id="in2"
              />
            </div>
            <div className="form__group">
              <button className="btn">Отправить</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
