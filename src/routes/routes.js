import Login from '../pages/auth/Login'
import Home from '../pages/Home'
import News from '../pages/News'
import Profile from '../pages/Profile'

export const routeNames = {
    HOME: '/',
    LOGIN: '/login',
    NEWS: '/news',
    PROFILE: '/profile',
}

export const publicRiutes = [
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
    {
        id: 3,
        component: News,
        path: routeNames.NEWS,
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
        component: News,
        path: routeNames.NEWS,
    },
    {
        id: 3,
        component: Profile,
        path: routeNames.PROFILE,
    },
]
