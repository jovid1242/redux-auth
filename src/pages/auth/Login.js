import React from 'react'

// store
import { useDispatch, useSelector } from 'react-redux'
import { setUserName, setUserPassword, login } from '../../redux/auth/authSlice'

// components
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { Button, Checkbox, Form, Input, Typography } from 'antd'

// icons
import { MdAccountCircle, MdFingerprint } from 'react-icons/md'

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
        console.log('Success:', values)
        dispatch(login())
        if (authState.isAuth) {
            navigate('/profile')
        } else {
            notifayWarning(authState.isError)
        }
        dispatch(setUserPassword(values))
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }

    return (
        <>
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
                                prefix={<MdAccountCircle />}
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
                                prefix={<MdFingerprint />}
                                placeholder="Пароль"
                            />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
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
