import React from 'react'
import '../../styles/posts/post.scss'

export default function Post({ title, text, image }) {
    return (
        <div className="post">
            <div className="post__wrapper">
                <div className="post__image">
                    <img src={image} alt={image} />
                </div>
                <div className="post__text">
                    <div className="info">
                        <span>{title}</span>
                        <p>{text.substr(0, 100)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
