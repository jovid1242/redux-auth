import React from 'react'

// components
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'

// routes
import { privateRoutes, publicRoutes, routeNames } from '../routes/routes'

function AppRouter() {
    const { isAuth } = useSelector((state) => state.auth)
    const getPublicRoutes = () => {
        return (
            <>
                {publicRoutes.map((route) => {
                    return (
                        <Route
                            path={route.path}
                            element={<route.component />}
                            key={route.id}
                        />
                    )
                })}
                <Route path="*" element={<Navigate to={routeNames.LOGIN} />} />
            </>
        )
    }
    const getPrivateRoutes = () => {
        return (
            <>
                {privateRoutes.map((route) => {
                    return (
                        <Route
                            path={route.path}
                            element={<route.component />}
                            key={route.id}
                        />
                    )
                })}
                <Route
                    path="*"
                    element={<Navigate to={routeNames.PROFILE} />}
                />
            </>
        )
    }
    return <Routes>{isAuth ? getPrivateRoutes() : getPublicRoutes()}</Routes>
}

export default AppRouter
