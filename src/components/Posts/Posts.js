import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../redux/post/postSlice'
import Post from './Post'
import Loader from '../Loader/Loader'
import Post1 from '../../assets/post.jpg'
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
                                image={Post1}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}
