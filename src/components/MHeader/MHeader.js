import React from 'react'

// components
import { Col, Row, Space } from 'antd'

// router
import { useLocation, Link } from 'react-router-dom'

// icons
import { MdOutlineMenuOpen } from 'react-icons/md'
// styles
import '../../styles/header/header.scss'

export default function MHeader() {
    let location = useLocation()
    const menuData = [
        {
            id: 1,
            title: 'Главная',
            href: '/',
        },
        {
            id: 3,
            title: 'Профиль',
            href: '/profile',
        },
    ]

    return (
        <header>
            <div className="navbar">
                <Row className="container">
                    <Col span={8} className="navbar__container">
                        <div className="logo">
                            <Link to="/">
                                <h2 className="logo__name">M-NEWS</h2>
                            </Link>
                        </div>
                    </Col>
                    <Col span={8} offset={8} className="navbar__container">
                        <ul className="menu">
                            {menuData?.map((el) => {
                                return (
                                    <li
                                        className={
                                            location.pathname === el.href
                                                ? 'menu__items active-list'
                                                : 'menu__items '
                                        }
                                        key={el.id}
                                    >
                                        <Link to={el.href}>{el.title}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </Col>
                </Row>
            </div>
        </header>
    )
}
