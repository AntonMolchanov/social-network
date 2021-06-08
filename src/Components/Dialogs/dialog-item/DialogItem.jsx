import React from "react";
import './DialogItem.css'
import Avatar from "./Avatar/Avatar";
import Message from "./dialog-messages/Message";
import {NavLink} from "react-router-dom";

const DialogItem = (props) =>{
    return(
        <div className='dialogs-item'>
            <NavLink to={`/dialogs/${props.id}`}>
                <Avatar avatar={props.avatar}/>
            </NavLink>
                <Message nickname={props.nickname} incMessage={props.incMessage}/>
        </div>
    )
}

export default DialogItem