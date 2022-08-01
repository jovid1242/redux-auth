import React from 'react'
import { Link } from 'react-router-dom'
// ant
import { Avatar, Card, Row, Col, Typography } from 'antd'

// styles
import '../../styles/posts/post.scss'

const { Meta } = Card
const { Title } = Typography

export default function Post({ postId, title, text, image }) {
    return (
        <Row>
            <Col span={24}>
                <Card
                    className="post"
                    cover={
                        <img
                            alt="image card"
                            className="post__image"
                            src={image}
                        />
                    }
                >
                    <Meta
                        avatar={
                            <Avatar src="https://joeschmoe.io/api/v1/random" />
                        }
                        title={
                            <Link to={`/post/${postId}`}>
                                <Title level={2}>{title}</Title>
                            </Link>
                        }
                        description={text}
                    />
                </Card>
            </Col>
        </Row>
    )
}
