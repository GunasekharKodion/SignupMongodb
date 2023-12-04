import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { IoLogOut } from "react-icons/io5";

const Home = () => {

    const [email, setEmail]=useState('')

    useEffect(() => {
        axios.get('https://localhost:3001/login')
        .then(emaill=>setEmail(emaill.data))
        .catch(err=>console.log(err))
    }, [])
    
    
  return (
   <>
   <h1 className='text-xl'>Home component</h1>
   {/* <IoLogOut size={40}/> */}
   <p>Logged In Email : {email} </p>
   </>
  )
}

export default Home