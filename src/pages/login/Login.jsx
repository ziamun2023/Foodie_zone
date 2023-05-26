import React, { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const captcharef=useRef(null)
    const [disabled,setDisabled]=useState(true)

    const handleValidate=()=>{
        const value=captcharef.current.value
        // console.log(value)
        if(validateCaptcha(value)){
setDisabled(false)
        }
    }
  
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])




    const handleLogin=(e)=>{
        e.preventDefault()
        const form=e.target
        const email=form.email.value
        const password=form.password.value
        console.log(email,password)

    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl text-center font-bold">Login now!</h1>
      <p className="py-6">.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" name='password' className="input input-bordered" />
      
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input type="text" placeholder="captcha " ref={captcharef} name='captcha' className="input input-bordered" />
          <button onClick={handleValidate} className="btn my-2">Validate</button>
        </div>
        <div className="form-control mt-6">
          <button disabled={disabled} className="btn btn-primary"><input  type="submit"  value="submit" /></button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;