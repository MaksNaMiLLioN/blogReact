import React from 'react'
import './post.css'
import {Link} from 'react-router-dom'


const Post = ({post}) => {
    return (
        <div className="post">
            <img 
            className="postImg"
            src="https://images.pexels.com/photos/9072452/pexels-photo-9072452.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
            alt="" 
            />
            <div className="postInfo">
                <div className="posCats">
                    {post.categories.map(cat =>(
                        <span className="postCat">{cat.name}</span>
                    ))}
                </div>
                <Link to={`/post/${post._id}`} className="link">
                <span className="postTitle">{post.title}</span>
                </Link>
                <hr/>
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">
                {post.desc}
           </p>
        </div>
    )
}

export default Post
