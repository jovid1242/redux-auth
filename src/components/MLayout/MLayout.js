import React from 'react'
// components
import { Layout } from 'antd'
import MHeader from '../MHeader/MHeader'

export default function MLayout({ children }) {
    return (
        <Layout className="layout">
            <MHeader />
        </Layout>
    )
}
