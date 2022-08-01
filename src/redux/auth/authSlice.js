import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuth: Boolean(Number(localStorage.getItem('auth'))),
    user: {
        username: '',
        password: '',
    },
    isError: false,
}

export const authSlice = createSlice({
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
        login: (state) => {
            if (
                state.user.username === 'Admin' &&
                state.user.password === '12345'
            ) {
                localStorage.setItem('auth', 1)
                state.isAuth = true
            } else {
                state.isError = 'Имя пользователя или пароль введены не верно'
            }
        },
        logout: (state) => {
            state.user = {}
            state.isAuth = false
            localStorage.removeItem('auth')
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    setIsAuth,
    setUserName,
    setUserPassword,
    login,
    logout,
    setError,
} = authSlice.actions

export default authSlice.reducer
