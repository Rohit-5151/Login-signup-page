import React from 'react'

function EditUser() {

  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userCollege, setUserCollege] = useState("");

  const updateUser=() =>{

  }

  return (
    <div>
        <input type="text" value='Name' placeholder='Enter the Name' onChange={(event)=>setUserName(event.target.value)}/>
        <br />
        <br />
        <input type="text" value='Age' placeholder='Enter the Age' onChange={(event)=>setUserAge(event.target.value)} />
        <br />
        <br />
        <input type="text" value='College' placeholder='Enter the College' onChange={(event)=>setUserCollege(event.target.value)} />
        <br />
        <br /> 
        <button onClick={updateUser}>Update</button>  
        <br />
        <br />            
    </div>
  )
}

export default EditUser
