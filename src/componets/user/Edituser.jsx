import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Edituser = () => {

  const Navigate = useNavigate()
  const {userId} = useParams()        // It will grab the userId value from url and return that

 
  const [user, setuser] = useState({name:"", username:"", email:"", phone:"",website:""})

  

 

  const onChangeinput = (e)=>{
    setuser({...user, [e.target.name] : e.target.value}) 

  }

  useEffect(()=>{
    fetchuser()

  },[])

  const fetchuser = async()=>{
    const response = await axios.get(`http://localhost:5000/users/${userId}`)  // getting userdata by using id
    setuser(response.data)
  

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
    axios.put(`http://localhost:5000/users/${userId}`, user)   // update the user data
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
            <Button type="submit" className='btn btn-info text-white col-12'> Update</Button>
            
        </form>
    </div>
    </div>
  )
}

export default Edituser