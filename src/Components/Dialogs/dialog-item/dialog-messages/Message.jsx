import React from "react";
import './Message.css'

const Message = (props) =>{
    return(
        <div className='dialogs-message'>
            <p className='nickname'>{props.nickname}</p>
            <p className='message'>{props.incMessage}</p>
        </div>
    )
}

export default Message