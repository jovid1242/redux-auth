import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/user/UserSlice'
import '../styles/profile/profile.scss'

export default function Profile() {
    const dispatch = useDispatch()
    const logoutUser = () => {
        dispatch(logout())
    }
    return (
        <>
            <div className="profile container">
                <h2>Добро пожаловать в Провиль</h2>
                <br />
                <button className="btn ml2" onClick={() => logoutUser()}>
                    Выход
                </button>
            </div>
        </>
    )
}
