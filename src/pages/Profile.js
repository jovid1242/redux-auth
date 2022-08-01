import React from 'react'

// components
import { Space, Button } from 'antd'
import { useDispatch } from 'react-redux'

// store
import { logout } from '../redux/auth/authSlice'

// styles
import '../styles/profile/profile.scss'

export default function Profile() {
    const dispatch = useDispatch()
    const logoutUser = () => {
        dispatch(logout())
    }
    return (
        <>
            <div className="profile container">
                <Space>
                    <h2>Добро пожаловать в Провиль</h2>
                    <Button onClick={() => logoutUser()} danger>
                        Выход
                    </Button>
                </Space>
            </div>
        </>
    )
}
