import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuth: Boolean(Number(localStorage.getItem('auth'))),
    user: {
        username: '',
        password: '',
    },
    status: false,
    isError: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.user.username = action.payload.username
            state.user.password = action.payload.password
        },
        login: (state) => {
            state.status = true
            if (
                state.user.username === 'admin' &&
                state.user.password === '12345'
            ) {
                localStorage.setItem('auth', 1)
                state.isAuth = true
                state.status = false
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
export const { setAuth, login, logout } = authSlice.actions

export default authSlice.reducer
