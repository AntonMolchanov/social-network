import React from "react";
import './Post.css'

 const Post = (props) => {
    return(
        <div className='post'>
            <div className='post-image-post'>
                <img className='post-image' src={props.imageSrc} alt=""/>
                <p className='post-text'>{props.message}</p>
            </div>
            <div className='post-like'>
                <span>like {props.likeCount}</span>
            </div>
        </div>
    )
}

export default Post