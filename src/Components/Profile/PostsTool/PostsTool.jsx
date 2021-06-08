import React from "react";
import './PostsTool.css'

const PostsTool = (props) =>{
    let newPostElement = React.createRef();

    let addPost = () =>{
        let text = newPostElement.current.value;
        props.addPost();
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updatePostText(text)
    }

    return(
        <div className='posts-creation-tool'>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            <div className='tool-buttons-block'>
                <button className='btn' onClick={addPost}>Add post</button>
            </div>
        </div>
    )
}

export default PostsTool