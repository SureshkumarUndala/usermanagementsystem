import React from 'react'
import { Button } from 'react-bootstrap';
import "./Pagenotfound.css"


const Pagenotfound = () => {
  return (
    <div className='hide'>
        <h1 className='py-1 px-5'>page you are looking for not exist</h1>
        <Button variant="primary">Primary</Button>{' '}
    </div>
  )
}

export default Pagenotfound