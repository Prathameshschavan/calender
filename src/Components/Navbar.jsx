// import { Button } from 'bootstrap'
import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{display:"flex", width:"100%", justifyContent:"space-around", boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px", padding:"1%", margin:"0 0 0% 0"}}>
    <Link to={"/enroll"}> <Button>Register Page</Button></Link>
    <Link to={"/calender"}> <Button>Calender</Button></Link>
    </div>
  )
}

export default Navbar
