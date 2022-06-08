import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userName, password } from "../../redux/user/UserSlice";
import "../../styles/auth/login.scss";

export default function Login() {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  const userState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLoginInput = (event) => {
    setLogin(event.target.value);
  };

  const handlePassInput = (event) => {
    setPass(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    dispatch(userName(login), password(pass));
    // dispatch(password(event.target.value));
    console.log("userState", userState);
  };

  return (
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
  );
}
