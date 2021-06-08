import React from "react";
import './Profile.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

 const Profile = (props) => {

     return(
        <div>
            <ProfileInfo/>
            <MyPosts newPostText={props.newPostText} postsData={props.postsData} addPost={props.addPost} updatePostText={props.updatePostText}/>
        </div>
    )
}

export default Profile