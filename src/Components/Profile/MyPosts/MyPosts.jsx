import React from "react";
import './MyPosts.css'
import Post from "./Post/Post";
import PostsTool from "../PostsTool/PostsTool";

 const MyPosts = (props) => {

     let postsData = props.postsData.map(postInfo => <Post key={postInfo.id} message={postInfo.postMessage} likeCount={postInfo.likeCount} imageSrc={postInfo.imageSrc}/>)

    return(
        <div className='profile-posts-creation'>
            <div className='posts-title'>My posts</div>
            <PostsTool addPost={props.addPost} newPostText={props.newPostText} updatePostText={props.updatePostText}/>
            <div className='profile-posts'>
                {postsData}
            </div>
        </div>
    )
}

export default MyPosts
