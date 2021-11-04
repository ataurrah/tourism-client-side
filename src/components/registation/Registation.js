import React, { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './reg.css'
const Registation = () => {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {register,setUser
    }=useAuth();


    const manulayRegister = (e)=>{
        e.preventDefault()
        register(email,password)
        .then(res=>{
          
            alert("Your are succesfuly REgister pleas login")
            history.push("/login")
            setUser({})
        })
    }


    const handleEmail = (e)=>{
        e.preventDefault()
        setEmail(e.target.value)

    }
    const handlePassword = (e)=>{
        e.preventDefault()
        setPassword(e.target.value)
    }


    return (
        <div className=' login'>
          
            <div className="container">
            <form onSubmit={manulayRegister}>
            <h4>Please Registation </h4><br />
            <input className='mb-2' type="text" placeholder='Enter your full name'/> <br />
            <input onBlur={handleEmail}  className='my-1'  type="text" placeholder='Enter your Email Address'/> <br />
            <input onBlur={handlePassword}  className='my-1'  type="password" placeholder='Enter your password'/> <br />
            <button onClick={manulayRegister} className='bg-success text-white'>Submit</button> <br />
            <p>already have an account ? <Link to='/login'>login</Link></p> 
            <div>------or-----</div>
         <button className='btn-regular'><span><i class="fab fa-google"></i></span> Google sign in</button>
    
            </form>
          
            </div> 
        </div>
    );
};

export default Registation;