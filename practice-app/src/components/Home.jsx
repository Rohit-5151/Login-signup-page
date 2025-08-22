import React from 'react'
import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router';


function Home() {
    const [userData, setUserData] = useState([]);
  useEffect(()=>{
    getUserData();
  },[])

  async function getUserData()
  {
    const url = "http://localhost:3000/users";
    let response = await fetch(url);
    response = await response.json();
    setUserData(response)
  }

  const deleteUser = async(id)=>
  {
    console.log(id)
    const url = "http://localhost:3000/users"  
    let response = await fetch(url+'/'+id, {
        method: "delete"
    });
    response = await response.json();
  }

  const updateUser = async(id) =>
  {
      
  }

  return (
    <div>
      {
        userData.map((user)=>
        (
          <ul>
            <li>{user.firstName}</li>
            <li>{user.age}</li>
            <li>{user.college}</li>
            <li><button onClick={()=>deleteUser(user.id)}>Delete</button></li>
            <li><button onClick={()=>updateUser(user.id)}>Edit</button></li>
          </ul>
        ))
      }
    </div>
  )
}

export default Home
