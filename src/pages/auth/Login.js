import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserName, setUserPassword, login } from '../../redux/user/UserSlice'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import '../../styles/auth/login.scss'

export default function Login() {
    const userState = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLoginInput = (event) => {
        const value = event.target.value
        dispatch(
            setUserName(value?.split('')[0]?.toUpperCase() + value.slice(1))
        )
    }

    const handlePassInput = (event) => {
        const value = event.target.value
        dispatch(setUserPassword(value))
    }

    const notifayWarning = (text) => {
        toast.warning(text)
    }

    const submitForm = (event) => {
        event.preventDefault()
        dispatch(login())
        if (userState.isAuth === 1) {
            navigate('/profile')
        } else {
            notifayWarning(userState.isError)
        }
    }

    return (
        <>
            <ToastContainer />
            <div className="container login">
                <div className="login__wrapper">
                    <form className="form" onSubmit={submitForm}>
                        <h3>Форма авторизации</h3>
                        <div className="form__group">
                            <label htmlFor="in1">Логин</label>
                            <input
                                type="text"
                                name="username"
                                onChange={handleLoginInput}
                                id="in1"
                                required
                            />
                        </div>
                        <div className="form__group">
                            <label htmlFor="in2">Пароль</label>
                            <input
                                type="password"
                                name="password"
                                onChange={handlePassInput}
                                id="in2"
                                required
                            />
                        </div>
                        <div className="form__group">
                            <button className="btn">Отправить</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
