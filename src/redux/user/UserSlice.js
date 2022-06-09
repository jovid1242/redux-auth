import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuth: 0,
    user: {
        username: '',
        password: '',
    },
    isError: false,
}

export const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuth: (state, action) => {
            state.isAuth = action.payload
        },
        setUserName: (state, action) => {
            state.user.username = action.payload
        },
        setUserPassword: (state, action) => {
            state.user.password = action.payload
        },
        setError: (state, action) => {
            state.isError = action.payload
        },
        login: (state, action) => {
            if (
                state.user.username === 'Admin' &&
                state.user.password === '12345'
            ) {
                localStorage.setItem('auth', 1)
                state.isAuth = localStorage.getItem('auth')
            } else {
                state.isError = 'Имя пользователя или пароль введены не верно'
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { setIsAuth, setUserName, setUserPassword, login, setError } =
    userSlice.actions

export default userSlice.reducer
