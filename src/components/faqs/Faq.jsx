import React, { useState } from 'react'
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";

const Faq = ({ title, description }) => {
  const [show, setShow] = useState(false);
  return (
    <div className='mx-auto my-4 flex w-full flex-col space-y-4  sm:max-w-screen-md'>
        <div className='my-[2px] flex justify-between bg-[#303030] py-4 px-2 sm:py-5 sm:px-6 '>
            <h1 className='text-lg sm:text-2xl' >{title}</h1>
         { show?( <AiOutlineClose onClick={()=> setShow(!show)} className='h-8 w-8 cursor-pointer'/>) : (<AiOutlinePlus onClick={()=> setShow(!show)} className='h-8 w-8 cursor-pointer'/> )}
        </div>
       
        {show && <div className='bg-[#303030]'>
           <p className='px-2 py-4 text-lg sm:py-6 sm:px-6 sm:text-2xl'>{description} </p>
         
        </div>
         }
    </div> 
  )
}

export default Faq