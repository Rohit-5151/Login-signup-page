import React, { useState } from 'react'
import { NavLink, Link } from 'react-router'

function AddUser() 
{
    const [userName, setUserName] = useState("");
    const [userAge, setUserAge] = useState("");
    const [userCollege, setUserCollege] = useState("");

    const addUserData = async()=>{
        console.log(userName, userAge, userCollege);
        const url = "http://localhost:3000/users"
        let response = await fetch(url, {
            method: 'Post',
            body: JSON.stringify({userName, userAge, userCollege})
        });
        response = response.json();
    }

  return (
    <div>
        <input type="text" placeholder='Enter the Name' onChange={(event)=>setUserName(event.target.value)}/>
        <br />
        <br />
        <input type="text" placeholder='Enter the Age' onChange={(event)=>setUserAge(event.target.value)} />
        <br />
        <br />
        <input type="text" placeholder='Enter the College' onChange={(event)=>setUserCollege(event.target.value)} />
        <br />
        <br /> 
        <button onClick={addUserData}>Submit</button>  
        <br />
        <br />            
    </div>
  )
}

export default AddUser
