import React, { useState } from 'react'

function SignUpForm(){
  return (
    <>
      <input type='text' placeholder='Mobile Number or Email' className='w-full p-3 my-1 bg-gray-300 outline-0'/>
      <input type='text' placeholder='Full Name' className='w-full p-3 my-1 bg-gray-300 outline-0'/>
    </>
  )
}


function Login() {
  const [isExist, setExist] = useState(true);
  const handleBtn = ()=>{
      setExist(!isExist)
  }

  return (
    <div className='w-[350px] min-h-[350px] border-2 p-3'>
        <div className='w-full my-5 text-center'>
        <img src='./Assets/images.jpg' alt='insta-logo'/>
        </div>
        <div>
          {
            (isExist ? "" : <SignUpForm />)
          }
            <input type='text' placeholder='Phone Number, username or email' className='w-full p-3 my-1 bg-gray-300 outline-0'/>
            <input type='password' placeholder='Password' className='w-full p-3 my-1 bg-gray-300 outline-0'/>
  
            <button type='submit' className='w-full p-2 my-1 bg-cyan-400 outline-0 rounded-md'>
               {isExist ? " Login" : " Sign up"}
            </button>

            <p className='my-5 text-center'>
              {isExist ? " Don't have account? " : " Have an account? "}
            <button className='text-cyan-600 font-bold' onClick={handleBtn}>
                {isExist ? " Sign up" : " Login "} 
            </button></p>   
        </div>

    </div>
  )
}

export default Login;