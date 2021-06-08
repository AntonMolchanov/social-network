import logo from './logo.svg';
import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import {BrowserRouter, Route} from 'react-router-dom'

function App(props) {
  return (
          <div className='app-wrapper'>
              <Header/>
              <Nav/>
              <div className='app-wrapper-content'>
                  <Route path='/profile' render={() => <Profile postsData={props.appData.profile.postsData} addPost={props.addPost} updatePostText={props.updatePostText} newPostText={props.appData.profile.newPostText}/>}/>
                  <Route path='/dialogs' render={() => <Dialogs dialogsData={props.appData.dialogs.dialogsData}/>}/>
                  <Route path='/music' component={Music}/>
                  <Route path='/news' component={News}/>
                  <Route path='/settings' component={Settings}/>
              </div>
          </div>
  );
}

export default App;
