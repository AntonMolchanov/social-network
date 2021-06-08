import App from './App';
import state, {subscribe} from "./Redux/State";
import {BrowserRouter} from "react-router-dom";
import {addPost,updatePostText} from "./Redux/State";
import ReactDOM from "react-dom";
import React from 'react'

let rerenderEntireTree = (state) =>{
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App appData={state} addPost={addPost} updatePostText={updatePostText}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderEntireTree(state)

subscribe(rerenderEntireTree)