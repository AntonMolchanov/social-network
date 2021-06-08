import React from "react";
import './Avatar.css'

const Avatar = (props) =>{
    return(
        <div className='dialogs-avatar'>
            <img src={props.avatar} alt=""/>
        </div>
    )
}

export default Avatar