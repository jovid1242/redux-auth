import React, { useEffect } from 'react'

// store
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../redux/post/postSlice'

// components
import Post from './Post'
import Loader from '../Loader/Loader'

// styles
import '../../styles/posts/posts.scss'

export default function Posts() {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return (
        <>
            <Loader visible={posts.status} />
            <div className="container">
                <div className="posts">
                    {posts.list.map((el) => {
                        return (
                            <Post
                                key={el.id}
                                title={el.title}
                                text={el.body}
                                postId={el.id}
                                image={
                                    'https://katen-template.netlify.app/html/images/posts/post-xl-1.jpg'
                                }
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}
