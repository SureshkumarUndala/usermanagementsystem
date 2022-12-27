import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
const Viewuser = () => {

    const {userId} = useParams()        // It will grab the userId value from url and return that

 
    const [user, setuser] = useState({name:"", username:"", email:"", phone:"",website:""})

    useEffect(()=>{
        fetchuser()
    
      },[])
    
      const fetchuser = async()=>{
        const response = await axios.get(`http://localhost:5000/users/${userId}`)  // getting userdata by using id
        setuser(response.data)
      
    
      }
  
    
  return (
    <div className='container'>
        <Link to="/" className="btn btn-outline-info mt-2 ">Back</Link>
        <p className="display-2">user Id:{user.id}</p>
      <ListGroup variant="flush" className='p-4 w-75'>
      <ListGroup.Item>Fullname : {user.name}</ListGroup.Item>
      <ListGroup.Item>Fullname : {user.username}</ListGroup.Item>
      <ListGroup.Item>Email : {user.email}</ListGroup.Item>
      <ListGroup.Item>Phone : {user.phone}</ListGroup.Item>
    </ListGroup>
    </div>
  )
}

export default Viewuser