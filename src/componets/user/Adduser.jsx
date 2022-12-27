import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Adduser = () => {

  const Navigate = useNavigate()
 
  const [user, setuser] = useState({name:"", username:"", email:"", phone:"",website:""})

 

  const onChangeinput = (e)=>{
    setuser({...user, [e.target.name] : e.target.value}) 

  }

  const Formsubmit = (e)=>{
    e.preventDefault()
    if(!user.name){
      alert("Name cannot be empty")
      return
    }
    if(!user.username){
      alert("username cannot be empty")
      return
    }
    if(!user.email){
      alert("emil cannot be empty")
      return
    }
    if(!user.phone){
      alert("phoneNumber cannot be empty")
      return
    }
    if(!user.website){
      alert("website cannot be empty")
      return
    }
    axios.post("http://localhost:5000/users", user)
    Navigate("/")

  }
  




  return (
    <div className='container'>
    <div className='w-75 mx-auto p-5 shadow-sm'>
        <h2 className='text-center'>Adduser</h2>
        <form onSubmit={(e)=>Formsubmit(e)}>

            <div className='form-group mb-2'>
            <input type="text"
            className='form-control form-control-lg'
            name="name"
            placeholder='Enter Your full name'
            value={user.name}
            onChange={(e)=>onChangeinput(e)}
         
           />
            </div>
 
            <div className='form-group mb-2'>
            <input type="text"
            className='form-control form-control-lg'
            name="username"
            placeholder='Enter Your user name'
            value={user.username}
            onChange={(e)=>onChangeinput(e)}
       
           />
            </div>

            <div className='form-group mb-2'>
            <input type="text"
            className='form-control form-control-lg'
            name="email"
            placeholder='Enter Your email'
            value={user.email}
            onChange={(e)=>onChangeinput(e)}
            />
            </div>
            <div className='form-group mb-2'>
            <input type="text"
            className='form-control form-control-lg'
            name="phone"
            placeholder='Enter Your phone number'
            value={user.phone}
            onChange={(e)=>onChangeinput(e)}
         
            />
            </div>

            <div className='form-group mb-4'>
            <input type="text"
            className='form-control form-control-lg'
            name="website"
            placeholder='Enter Your website'
            value={user.website}
            onChange={(e)=>onChangeinput(e)}
        
             />
            </div>
            <Button type="submit" className='btn btn-info text-white col-12'>Add user</Button>
            
        </form>
    </div>
    </div>
  )
}

export default Adduser