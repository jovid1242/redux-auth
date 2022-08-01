import React from 'react'
import { useNavigate } from 'react-router-dom'

// store
import { useDispatch, useSelector } from 'react-redux'
import { setAuth, login } from '../../redux/auth/authSlice'

// components
import { ToastContainer, toast } from 'react-toastify'
import Loader from '../../components/Loader/Loader'

// ant
import { Button, Form, Input, Typography } from 'antd'

// icons
import { UserOutlined, SafetyOutlined } from '@ant-design/icons'
// styles
import 'react-toastify/dist/ReactToastify.css'
import '../../styles/auth/login.scss'

const { Title } = Typography

export default function Login() {
    const authState = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const notifayWarning = (text) => {
        toast.warning(text)
    }

    const onFinish = (values) => {
        dispatch(setAuth(values))
        dispatch(login())
        if (authState.isAuth) {
            navigate('/profile')
        } else {
            notifayWarning(authState.isError)
        }
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }

    return (
        <>
            <Loader visible={authState.status} />
            <ToastContainer />
            <div className="login">
                <div className="login__wrapper">
                    <Title level={2} className="m-text">
                        Форма авторизация
                    </Title>
                    <Form
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Пожалуйста, введите Ваш логин!',
                                },
                            ]}
                        >
                            <Input
                                className="form__action-icon"
                                prefix={<UserOutlined />}
                                placeholder="Имя пользователя"
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Пожалуйста введите ваш пароль!',
                                },
                            ]}
                        >
                            <Input.Password
                                className="form__action-icon"
                                prefix={<SafetyOutlined />}
                                placeholder="Пароль"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button htmlType="submit">Submit</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    )
}
