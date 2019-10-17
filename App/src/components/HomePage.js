import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosWithAuth from './axiosWithAuth'

const HomePage = () => {
    const [userList, setUserList] = useState([])
    console.log(userList)
    useEffect(() => {
    
  
    const getData = () => {
     
      axiosWithAuth()
        .get('/users') 
        .then(res => 
          setUserList(res.data.users))
        .catch(error => console.log(error));
    }
      getData(); 
     }, []);
    return (
      
      <div className="whole-page">
         {userList.map(user => (
           <p>{user.username}</p>
         ))}
     <h1>Hello</h1>
      </div>
      
    );
  };



export default HomePage;
