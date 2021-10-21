import { useLocation } from 'react-router'
import {useEffect, useState, useContext } from 'react'
import './singlePost.css'
import axios from 'axios'
import { Context } from '../../context/Context'
import { Link } from 'react-router-dom'

const SinglePost = () => {
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    const [post, setPost] = useState([])
    const { user } = useContext(Context)
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [updateMode, setUpdateMode] = useState(false)


    useEffect(()=>{
        const getPost = async () =>{
            const res = await axios.get("/posts/"+path, {username: user.username})
            setPost(res.data)
        }
        getPost()
    }, [path])

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`, {
                data: { username: user.username },
            })
            window.location.replace("/")
        } catch(err) {

        }
    }

    const PF = "http://localhost:5000/images/"

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && 
                    <img 
                    src={PF + post.photo}
                    alt="" className="singlePostImg" 
                    />            
                }
                {
                    updateMode ? <input type="text" value={post.title} className="singlePostTitleInput"></input>:(
                    <h1 className="singlePostTitle"> 
                        {post.title}
                        {post.username === user?.username && (
                        <div className="singlePostEdit">
                            <i className="singlePostIcon far fa-edit" onClick={()=>setUpdateMode(true)}></i>
                            <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                        </div>
                        )}
                    </h1>
                    )
                }


                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: 
                    <Link to={`/?user=${post.username}`} className="link">
                    <b>{post.username}</b>
                    </Link>
                    </span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
            </div>
            {updateMode ? <textarea className="singlePostDesc"/> : (
            <p className="singlePostDesc">
                { post.desc }
            </p>
            )}

        </div>
    )
}

export default SinglePost
