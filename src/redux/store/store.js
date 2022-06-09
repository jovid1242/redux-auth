import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../user/UserSlice'
import postSlice from '../post/postSlice'

const store = configureStore({
    reducer: {
        auth: userSlice,
        posts: postSlice,
    },
})

export default store
