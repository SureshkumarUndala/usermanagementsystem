import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios";
import {Table, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
 

const Home = () => {
  const [users, setusers] = useState([])


  useEffect(()=>{
   getAllusers()

  },[])

  const getAllusers = async()=>{
    const response = await axios.get("http://localhost:5000/users")
    setusers(response.data.reverse())   // store the response (data from api) in the users variable
  }

  const deleteUser = async (userId)=>{
    await axios.delete(`http://localhost:5000/users/${userId}`)
    getAllusers()  // after deleting we call getallusers function for getting available users


  }






  return (
    <div className='Container py-2 px-3' >
        <h3 >User Management System</h3>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((user,index)=>{
            return(
            <tr key={index}>
              <td>{index+1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <Link to={`/users/views/${user.id}`}className='btn btn-info me-2'>view</Link>
                <Link to={`/users/edit/${user.id}`} className='btn btn-outline-info me-2'>Edit</Link>
                <Button onClick={()=>deleteUser(user.id)} variant= "danger">Delete</Button>
             
              </td>
              
            
            </tr>)
          
          })
        }
     
      </tbody>
    </Table>
    </div>
  )
}

export default Home