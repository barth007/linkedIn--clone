import React,{useEffect} from 'react';
import './App.css';
import Header from './component/Header/Header';
import Sidebar from './component/Sidebar/Sidebar';
import Feed from './component/Feed/Feed';
import {useDispatch, useSelector} from "react-redux";
import {selectUser, login, logout} from "./features/userSlice";
import Login from './component/Login/Login';
import {auth} from "./firebase";
import Widget from './component/Widget/Widget';

function App() {
  const user= useSelector(selectUser);
  const dispatch =useDispatch();
// This runs anytime the page refresh it checks if the user is logged in or not
  useEffect(() => {
    auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        // if the userAuth is there then the user is logged in then  push to redux
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }))
      }else{
        dispatch(logout());

      }
    })
  
   
  }, [])
  
  return (
    <div className="App">
     <Header/>
     {!user ? (
       <Login/>
     ):(
      <div className='app__body'>
      <Sidebar/>
      <Feed/>
      <Widget/>
    </div>
     )}
     
    </div>
  );
}

export default App;
