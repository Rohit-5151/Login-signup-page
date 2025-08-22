import { useState, useTransition, useRef, useActionState, useId, useEffect, useReducer} from 'react';
import { lazy, Suspense } from 'react';
import User from './components/User';
import { useFormStatus } from 'react-dom';
import College from './components/College';
import { ContextData } from './components/ContextData';
import AddUser from './components/AddUser';
import { Routes, Route } from 'react-router'
import Home from './components/Home';
import { NavLink, Link } from 'react-router';
import UpdateUser from './components/UpdateUser';
// import './App.css'

// function App() 
// {
//   let arr = {
//     firstname: "Rock",
//     lastname: "Panchal",
//     bodycount: "0"   
//   }
//   const [count, setCount] = useState(0)
//   const [inputValue1, setInputValue1] = useState('')
//   const [inputValue2, setInputValue2] = useState('')
//   return (
//     <div>
//       <h1>This is your Body Count Test</h1>
//       <label htmlFor="">Enter First Name: </label>
//       <input type="text" placeholder='Enter Firstname' onChange={(event)=> setInputValue1(event.target.value)} />
//       <br />
//       <br />
//       <label htmlFor="">Enter Last Name: </label>
//       <input type="text" placeholder='Enter Lastname' onChange={(event) => setInputValue2(event.target.value)} />
//       <br />
//       <br />
//       <label htmlFor="">Body Count: </label>
//       <br />
//       <button onClick={() => (setCount(count-1))}>-</button>
//       <h2>{count}</h2>
//       <button onClick={() => (setCount(count+1))}>+</button>
      
//       <User fname={inputValue1} lname={inputValue2} bcount={count}/>
//       <User fname={arr.firstname} lname={arr.lastname} bcount={arr.bodycount}/>
//     </div>
//   )
// }

// function App()
// {

//   const displayName = (name) => {
//     alert("This is" + name)
//   }
//   return(
//   <>
//     <h1>Hello User</h1>
//     <User displayName={displayName} name="Rock"/>
//     <User displayName={displayName} name="Panchal"/>
//     <User displayName={displayName} name="Hello"/>
//   </>
//   )
  
// }

// function App()
// {
//   const handleSubmit = async () =>
//   {
//     await new Promise(res=>setTimeout(res, 5000))
//   }

//   function CustomerForm()
//   {
//     const {pending} = useFormStatus()
//     return(
//       <div>
//           <input type="text" placeholder='Enter the Name' />
//           <br />
//           <br />
//           <input type="text" placeholder='Enter the Password' />
//           <br />
//           <br />
//           <button disabled={pending}>{pending?'Submitting...':'Submit'}</button>
//       </div>  
//     )
//   }
//   return(
//     <>
//     <h1>Use of useFormStatus Hooks in React 19</h1>
//     <form action={handleSubmit}>
//       <CustomerForm />
//     </form>    
//     </>
//   )
// }

// function App()
// {
//   const [pending, setTrans] = useTransition();

//   const handleSubmit=() =>
//   {
//     setTrans(async()=>{
//       await new Promise(res=>setTimeout(res, 5000))
//     })
    
//   }
//   return(
//     <>
//       <h1>Use of useTransition Hook in React 19</h1>
//       {
//         pending?<img src="https://www.wpfaster.org/wp-content/uploads/2013/06/loading-gif.gif" alt="loading image" /> : null
//       }
//       <button onClick={handleSubmit} disabled={pending}>Submit</button>
//     </>
//   )
// }

// function App()
// {
//   const [users, setUsers] = useState([]);
//   const [name, setName] = useState('');
//   const totalUser = users.length;
//   const lastUser = users[users.length-1];
//   const uniqueUser = [...new Set(users)].length
//   const cleanInput = useRef();

//   const handleUsers=()=>{
//     cleanInput.current.value=''
//     setUsers([...users, name])
//   }

//   return(
//     <>
//       <h1>Total Users: {totalUser}</h1>
//       <h1>Last User: {lastUser}</h1>
//       <h1>Unique Users:{uniqueUser}</h1>
//       <input type="text" ref={cleanInput} placeholder='Enter the name' onChange={(event)=>setName(event.target.value)} />
//       <button onClick={handleUsers}>Add User</button>
//       {
//         users.map((item, index)=>(
//           <h2 key={index}>{item}</h2>
//         ))
//       }
//     </>
//   )
// }

// function App()
// {
//   const [userName, setUserName] = useState("")
//   const [companyName, setCompanyName] = useState("")
//   const [projectName, setProjectName] = useState("")
//   const [managerName, setManagerName] = useState("")

//   const [data, setData] = useState({
//     name: "Rohit",
//     company: {
//       code: "007",
//       compName: "Accenture",
//       project: {
//         manager: "sandeep",
//         projName: "ALIP"
//       }
//     }
//   })

//   const handleInputs=()=>
//   {
//     data.name = userName
//     data.company.compName = companyName
//     data.company.project.projName = projectName
//     data.company.project.manager = managerName
//     setData({...data})
//     setData({...data, company:{...data.company, setCompanyName}})
//     setData({...data, project:{...data.company.project, setProjectName}})
//     setData({...data, manager:{...data.company.manager, setManagerName}})
//   }

//   return(
//     <div className='basicInfo'>
//       <h1>Oject Update in State</h1>
//       <h3>User Name: {data.name}</h3>
//       <h3>Company Name: {data.company.compName}</h3>
//       <h3>Project Name: {data.company.project.projName}</h3>
//       <h3>Manager Name: {data.company.project.manager}</h3>
//       <input type="text" placeholder='Enter the user name' onChange={(event) => setUserName(event.target.value)} />
//       <br />
//       <br />
//       <input type="text" placeholder='Enter the company name' onChange={(event) => setCompanyName(event.target.value)}/>
//       <br />
//       <br />
//       <input type="text" placeholder='Enter the project name' onChange={(event) => setProjectName(event.target.value)}/>
//       <br />
//       <br />
//       <input type="text" placeholder='Enter the manager name' onChange={(event) => setManagerName(event.target.value)}/>
//       <br />
//       <br />
//       <button onClick={handleInputs}>Update</button>
//     </div>
//   )
// }

// function App()
// {
//   const handleSubmit=(previousData, formData)=>{
//     let name = formData.get('name');
//     let password = formData.get('password');
//     console.log("print the data", password, name);
//   }
//   const [data, action, pending] = useActionState(handleSubmit, null);
//   return(
//     <>
//     <form action={action}>
//       <h1>useActionState Hook</h1>
//         <input type="text" placeholder='enter name' name="name"/>
//         <br />
//         <br />
//         <input type="text" placeholder='enter password' password="password"/>
//         <br />
//         <br />
//         <button disabled={pending}>Submit</button>
//     </form>
//     <h3>Name: {data?.name}</h3>
//     <h3>Password: {data?.password}</h3>
//     </>
//   )
// }

// function App()
// {
  
//   return(
//     <>
//       <h1>useId Hook</h1>
//       <UserDetails />
//       <hr />
//       <UserDetails />
//       <hr />
//       <UserDetails />
//     </>
//   )
 
// }
// function UserDetails()
// {
//   const name = useId();
//   const terms = useId();
//   return(
//     <>
//       <label htmlFor={name}>Enter the User Name</label>
//       <input id={name} type="text" placeholder='Enter the User Name' />
//       <br />
//       <label htmlFor={terms}>Terms and condition applied</label>
//       <input id={terms} type="checkbox" />
//     </>
//   )
// }

// function App()
// {
//   const [subject, setSubject] = useState('');
//   return(
//     <>
//     <div style={{backgroundColor: 'Red', padding: '10px'}}>
//       <ContextData.Provider value={subject}>
//       {/* <input type="text" placeholder='Enter the subject' onChange={(event)=>setSubject(event.target.value)} /> */}
//       <select value={subject} onChange={(event)=>setSubject(event.target.value)}>
//         <option value="">--Select--</option>
//         <option value="Math">Math</option>
//         <option value="English">English</option>
//         <option value="Hindi">Hindi</option>
//       </select>
//       <h1>Context API</h1>
//       <button onClick={()=>setSubject('')}>Clear Subject</button>
//       <College />
//       </ContextData.Provider>
//     </div> 
//     </>

//   )
// }

// function App()
// {
//   const [userData, setUserData] = useState([]);
//   useEffect(()=>{
//     getUserData();
//   },[])

//   async function getUserData()
//   {
//     const url = "https://dummyjson.com/users";
//     let response = await fetch(url);
//     response = await response.json();
//     setUserData(response.users)
//   }

//   return(
//     <>
//       <h1>API</h1>
//       {
//         userData && userData.map((user)=>
//         (
//           <ul>
//             <li>{user.firstName}</li>
//             <li>{user.age}</li>
//             <li>{user.lastName}</li>
//           </ul>
//         ))
//       }
//     </>
//   )
// }

// function App()
// {
//   return(
//     <>
//       <h1>API and Routes</h1>
//       <NavLink to='/'>Home Page</NavLink>
//       <br />
//       <NavLink to='/adduser'>Add User</NavLink>
//       <Routes>
//         <Route path='/' element={<Home />}/>
//         <Route path='/adduser' element={<AddUser />}/>
//         <Route path='/updateuser' element={<UpdateUser />}/>
//       </Routes>
//     </>
//   )
// }

// function App()
// {
//   const [name, setName] = useState('');
//   const [pass, setPass] = useState('');  

//   const nameValidation=(event)=>
//   {
//       if(event.target.value.length > 5)
//       {
//         setName("Please enter valid Name")
//       }
//       else
//       {
//         setPass('')
//       }
//   }

//   const passValidation=(event)=>
//   {
//       let regex = /^[A-Z0-9]+$/i;
//       if(!regex.test(event.target.value))
//       {
//         setPass("please enter chars and numbers only")
//       }
//       else
//       {
//         setPass("")
//       }
//   }

//   return(
//     <>
//       <h1>Simple Form Validation</h1>
//       <input className={name?'error':''} type="text" placeholder='Enter Name' onChange={nameValidation} />
//       <span>{name && name}</span>
//       <br />
//       <br />
//       <input className={pass?'error':''} type="text" placeholder='Enter Password' onChange={passValidation} />
//       <span>{pass && pass}</span>
//       <br />
//       <br />
//       <button disabled={name || pass}>Login</button>
//     </>
//   )
// }


// function App()
// {
//   const handleForm=(prevData, formData)=>
//   {
//     let name = formData.get('name');
//     let pass = formData.get('password');
//     let regex = /^[A-Z0-9]+$/i;

//     if(!name || name.length > 5)
//     {
//       return {error:'Name should be less than 5 chars'}
//     }
//     else if(!regex.test(pass))
//     {
//       return {error:'Password should be char or nums'}
//     }    
//     else
//     {
//       return {message:'Login Done'}
//     }
//   }

//   const [data, action, pending] = useActionState(handleForm);
//   return(
//     <>
//       <h1>Form Validation With useActionState</h1>
//       {
//         data?.message && <span>{data?.message}</span>
//       }
//       {
//         data?.error && <span>{data?.error}</span>
//       } 
//       <form action={action}>
//           <input defaultValue={data?.name} type="text" name='name' placeholder='Enter Name'/>
//           <br />
//           <br />
//           <input defaultValue={data?.password} type="text" name='password' placeholder='Enter Password'/>
//           <br />
//           <br />
//           <button disabled={data?.error}>Login</button>
//       </form>
      
//     </>
//   )
// }

// function App()
// {
//   const emptyData = {
//     name: '',
//     password: '',
//     email: '',
//     city: '',
//     address: '',
//     weight: '',
//     height: '',
//     course: '',
//   }

//   const reducer=(data, action)=>
//   {
//       return {...data, [action.type]:action.val}
//   }

//   const printData=()=>
//   {
//     console.log(data);
//   }

//   const [data, setData] = useReducer(reducer, emptyData)
//   return(
//     <>
//       <h1>useReducerHook</h1>
//       <input type="text" placeholder='Enter the name' onChange={(event)=>setData({val:event.target.value, type:'name'})} />
//       <br />
//       <br />
//       <input type="text" placeholder='Enter the password' onChange={(event)=>setData({val:event.target.value, type:'password'})} />
//       <br />
//       <br />
//       <input type="text" placeholder='Enter the email' onChange={(event)=>setData({val:event.target.value, type:'email'})} />
//       <br />
//       <br />
//       <input type="text" placeholder='Enter the city' onChange={(event)=>setData({val:event.target.value, type:'city'})} />
//       <br />
//       <br />
//       <input type="text" placeholder='Enter the address' onChange={(event)=>setData({val:event.target.value, type:'address'})} />
//       <br />
//       <br />
//       <input type="text" placeholder='Enter the weight' onChange={(event)=>setData({val:event.target.value, type:'weight'})} />
//       <br />
//       <br />
//       <input type="text" placeholder='Enter the height' onChange={(event)=>setData({val:event.target.value, type:'height'})} />
//       <br />
//       <br />
//       <input type="text" placeholder='Enter the course' onChange={(event)=>setData({val:event.target.value, type:'course'})} />
//       <br />
//       <br />
//       <button onClick={printData}>Submit</button>
//     </>
    
//   )
// }

// const LazyLoadingUser = lazy(()=> import('./components/LazyLoadingUser'));
// function App()
// {
//   const [load, setLoad] = useState(false)

//   return(
//     <>
//       <h1>Lazy Loading</h1>
//       {
//         load? <Suspense fallback={<h1>Loading...</h1>}> <LazyLoadingUser /> </ Suspense> : null
//       }
//       <button onClick={()=>setLoad(true)}>Load Data</button>
//     </>
//   )
// }

// function App()
// {
//   const colors = JSON.parse(localStorage.getItem('color'))
//   const [r, setR] = useState(colors && colors.r?colors.r:0);
//   const [g, setG] = useState(colors && colors.g?colors.g:0);
//   const [b, setB] = useState(colors && colors.b?colors.b:0);

//   const saveChanges=()=>
//   {
//     console.log(r,g,b);
//     localStorage.setItem("color", JSON.stringify({r,g,b}))
//   }

//   return(
//     <>
//     <h1>RGB Mixture</h1>
//     <div  style={{
//         backgroundColor: 'rgb('+r+','+g+','+b+')',
//         width: '200px',
//         height: '200px'
//       }}>

//     </div>
//     <br />
//     <br />
//     <label htmlFor=""  style={{color: 'Red'}}>Red</label>
//     <input type="range" min={0} max={255} onChange={(event)=>setR(event.target.value)}/>
//     <br />
//     <br />
//     <label htmlFor="" style={{color: 'green'}}>Green</label>
//     <input type="range" min={0} max={255} onChange={(event)=>setG(event.target.value)}/>
//     <br />
//     <br />
//     <label htmlFor=""  style={{color: 'Blue'}}>Blue</label>
//     <input type="range" min={0} max={255} onChange={(event)=>setB(event.target.value)}/>
//     <br />
//     <br />
//     <button onClick={saveChanges}>Save</button>
//     </>
//   )
// }

function App()
{
  return(
    <>
      <h1></h1>
    </>
  )
}
 
export default App