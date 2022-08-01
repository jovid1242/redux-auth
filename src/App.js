import React from 'react'

// components
import AppRouter from './components/AppRouter'
import MLayout from './components/MLayout/MLayout'

// styles
import './styles/global.css'
import 'antd/dist/antd.css'

function App() {
    return (
        <>
            <MLayout />
            <AppRouter />
        </>
    )
}

export default App
