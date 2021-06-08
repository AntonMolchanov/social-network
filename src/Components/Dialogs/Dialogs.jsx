import React from "react";
import './Dialogs.css'
import DialogItem from "./dialog-item/DialogItem";
import Reply from "./Reply";

const Dialogs = (props) => {


    let dialogsData = props.dialogsData.map(user => <DialogItem key={user.id} nickname={user.name} id={user.id} incMessage={user.message} avatar={user.avatar}/>)

    return(
            <div className='dialogs'>
                <div className='dialogs-container'>
                    {dialogsData}
                    <Reply/>
                </div>
            </div>
    )
}
export default Dialogs