import React, { useState, useEffect } from 'react'
import image1 from './assets/drone.jpg'
import image2 from './assets/logoo.png'
import image3 from './assets/google.png'
import image4 from './assets/instagramww.png'
import image5 from './assets/facebook.png'

import { Link, useNavigate} from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import axios from 'axios'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errl, setErrl] = useState(false)
    const [mailcheck, setMailcheck] = useState("")
    const [passcheck, setPasscheck] = useState("")
    const [passeye, setPasseye] = useState(false)
    const [addvalue, setAddvalue] = useState([])
const navig=useNavigate()
    const [signincontain, setSignincontain] = useState({})
    const [name, setName]=useState("")

    useEffect(() => {
        const getter=JSON.parse(localStorage.getItem("adduser"))
        if(getter){
            setSignincontain(getter)
        }
      }, [])

      

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

    const handleSubmit = (e) => {
        e.preventDefault()

        if (email.length == 0) {
            setErrl(true)
        }
        else if (!pattern.test(email)) {
            setErrl(true)
        }
        else if (password.length == 0) {
            setErrl(true)
        }
        else {
            // const userMatch = signincontain.find((user) => {
            //     return user.email === email && user.password === password;
               
            // });
            
            axios.post('http://localhost:3001/login',{email,password})
            .then(res=>{console.log(res)
            if(res.data === "Success"){
navig('/home')
            }}
            )
            .catch(error=>console.log(error))
            
            
        }
    }
    return (
        <>
        
            <div className='max-h-screen w-full bg-white font-montserrat font-light '>
                <div className='flex flex-row items-center h-screen justify-center '>
                    <div className='basis-1/2 '>
                        <div className='flex flex-col gap-3 justify-start items-start  mx-16'>
                            <div >
                                <img src={image2} className=' bg-slate-200 h-12 w-12 drop-shadow-lg mb-6 '></img>
                            </div>
                            <div>
                                <h1 className='text-2xl font-medium mb-4'>Login</h1>
                            </div>

                            <div>
                                <form className='flex flex-col justify-start items-start bg-transparent gap-3 mx-auto' onSubmit={handleSubmit}>
                                    <div className='flex flex-col  w-full'>
                                        <input type='email' placeholder='Email' maxLength={25} value={email} onChange={(e) => setEmail(e.target.value)} className='bg-transparent focus:outline-none'></input>
                                        <hr class="w-full mt-1"></hr>
                                        {errl && email.length == 0 ?
                                            <label className='text-red-500 text-xs'>Email is required</label> : ""}
                                        {errl && email.length > 0 && !pattern.test(email) ?
                                            <label className='text-red-500 text-xs'>Email is invalid</label> : ""}
                                    </div>
                                    <div className='flex flex-col relative  w-full'>
                                        <input type={passeye ? 'text' : 'password'} placeholder='Password' maxLength={25} value={password} onChange={(e) => setPassword(e.target.value)} className='bg-transparent focus:outline-none'></input>
                                        <div className='absolute right-1 top-0' onClick={() => setPasseye(!passeye)}>{passeye ? <AiOutlineEye color='gray' /> : <AiOutlineEyeInvisible color='gray' />}</div>

                                        <hr class="w-full mt-1"></hr>
                                        {errl && password == 0 ?
                                            <label className='text-red-500 text-xs'>Password is required</label> : ""}
                                             <label className='text-right text-blue-700 hover:text-blue-400 text-sm mt-1 cursor-pointer'>Forgot password?</label>
                                    </div>
                                    <div className='flex flex-row justify-center mt-4 items-center gap-10'>
                                        <button className='bg-blue-500 text-white py-2 px-7 text-sm rounded-full'>Login</button>
                                        <p className='text-xs'>Don't have an account? <span className='text-base font-medium text-blue-600 cursor-pointer'><Link to='/'>Sign Up</Link></span></p>
                                    </div>
                                    </form>
                            </div>
                            <div className='flex flex-row justify-center items-center gap-3 mx-auto'>
                                <hr className='w-10'></hr>
                                <p>or</p>
                                <hr className='w-10'></hr>
                            </div>
                            <div className='flex flex-row justify-center items-center gap-6 mx-auto'>
                                <img src={image3} className='h-10 w-10 bg-white rounded-full drop-shadow-lg cursor-pointer'></img>
                                <img src={image4} className='h-10 w-10 bg-white rounded-full drop-shadow-lg cursor-pointer  p-2'></img>
                                <img src={image5} className='h-10 w-10 bg-white rounded-full drop-shadow-lg cursor-pointer p-3'></img>
                            </div>
                        </div>
                    </div>
                    <div className='basis-1/2 object-cover overflow-hidden relative'>
                    <p className='absolute text-3xl text-white top-16 left-10 uppercase text-center'>Hire the best drone service <br></br>provider</p>
                        <img src={image1} className='h-screen object-cover overflow-hidden'></img>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login