import React from 'react'

// components
import { Avatar, Card, Row, Col, Typography } from 'antd'

// styles
import '../../styles/posts/post.scss'

const { Meta } = Card
const { Title } = Typography

export default function Post({ title, text, image }) {
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
                        title={<Title level={2}>{title}</Title>}
                        description={text}
                    />
                </Card>
            </Col>
        </Row>
    )
}
