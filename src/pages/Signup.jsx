import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
 import {auth} from  "../config/firebase"
import {createUserWithEmailAndPassword} from 'firebase/auth';


const Signup = () => {
  const { register,
    handleSubmit, 
    watch, 
    formState: 
    { errors } } =
     useForm();

  const onSubmit = async (data) =>{
      try{
        const {email, password} = data;
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
     alert("seccessfully registered");

   
      }
      catch (err){
        console.log(err)
      }
  };
 
  return (
    <div className='relative flex h-screen w-screen flex-col md:items-center md:justify-center'>
        <img src="./images/misc/home.jpeg"  alt=""
        className='absolute h-screen w-screen object-cover -z-10 opacity-60 sm:inline '
        />
        <Link to="/">
            <img src="./images/logo/mainlogo.svg" alt=""
            className='absolute top-0 left-2 w-[100px] object-contain md:w-[150px]'
            />
        </Link>
        
   <form 
       onSubmit={handleSubmit(onSubmit)}   
       className='relative mt-24 space-y-8 rounded bg-black/70 py-10 px-6 md:mt-0 md:max-w-md md:px-13'>
         <h1 className='text-white text-2xl font-semibold my-6'>sign up</h1>
        <lable className="inline-block w-full">
          <input{...register("email", {required : true})} type="email" className='form-control'/>
        {errors.email && <p className='pt-2 text-sm text-orange-500'>this field is required</p>}
        </lable>
        <lable className="inline-block w-full">
          <input {...register("password", {required : true})} type="password" className='form-control'/>
          {errors.password && <p className='pt-2 text-sm text-orange-500'>this field is required</p>}

        </lable>
        <button className='btn'>sign up</button>
        <div className=' flex gap-x-1'>
          <p className='text-lg text-[#8d8d8d]'> already had an account?</p>{""}
          <Link className='hover:underline' to="/Login">
            sign in
          </Link>
        </div>
   </form>
    </div>
  )
}

export default Signup;