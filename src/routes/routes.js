// components
import Login from '../pages/auth/Login'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Post from '../pages/Post'

export const routeNames = {
    HOME: '/',
    LOGIN: '/login',
    POST: '/post/:id',
    PROFILE: '/profile',
}

export const publicRoutes = [
    {
        id: 1,
        component: Home,
        path: routeNames.HOME,
    },
    {
        id: 2,
        component: Login,
        path: routeNames.LOGIN,
    },
]

export const privateRoutes = [
    {
        id: 1,
        component: Home,
        path: routeNames.HOME,
    },
    {
        id: 2,
        component: Profile,
        path: routeNames.PROFILE,
    },
    {
        id: 3,
        component: Post,
        path: routeNames.POST,
    },
]
