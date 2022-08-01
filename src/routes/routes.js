// components
import Login from '../pages/auth/Login'
import Home from '../pages/Home'
import Profile from '../pages/Profile'

export const routeNames = {
    HOME: '/',
    LOGIN: '/login',
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
        id: 3,
        component: Profile,
        path: routeNames.PROFILE,
    },
]
