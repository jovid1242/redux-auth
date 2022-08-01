import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

// components
import Loader from '../components/Loader/Loader'

// ant
import { Avatar, Card, Row, Col, Typography } from 'antd'
const { Meta } = Card
const { Title } = Typography

export default function Post() {
    const [post, setpost] = useState({})
    const [load, setLoad] = useState(true)
    let { id } = useParams()

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => {
                setpost({
                    title: res.data.title,
                    text: res.data.body,
                    image: 'https://katen-template.netlify.app/html/images/posts/post-xl-1.jpg',
                })
                setLoad(false)
            })
            .catch(() => {
                setLoad(true)
            })
    }, [])

    return (
        <>
            <Loader visible={load} />
            <Row className="container pt120">
                <Col span={24}>
                    <Card
                        className="post"
                        cover={
                            <img
                                alt="image card"
                                className="post__image"
                                src={post.image}
                            />
                        }
                    >
                        <Meta
                            avatar={
                                <Avatar src="https://joeschmoe.io/api/v1/random" />
                            }
                            title={<Title level={2}>{post.title}</Title>}
                            description={post.text}
                        />
                    </Card>
                </Col>
            </Row>
        </>
    )
}
