import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import BASE_IMAGE_URL from '../../constants';

const Row = ({title, url}) => {
    const [movies, setMovies] = useState([]);
    const [isIScroll, setisIScroll] = useState(false);
    const rowRef = useRef(null);
    useEffect(() => {
		const fetchMovie = async () => {
			const { data } = await axios.get(url);
			setMovies(data.results);
		};
		fetchMovie();
	}, []);
const handleScroll=(direction)=>{
   setisIScroll(true);
   if(rowRef.current ){
    console.log(rowRef.current.clientWidth);
    console.log(rowRef.current.scrollRight);
    const {clientWidth, scrollLeft}=rowRef.current;
    const scrollTo = direction === "left" ? 
       scrollLeft - clientWidth 
      : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
   }
}

  return (
    <div className='h-40'>
        <h2 className='text-lg font-semibold'>{title}</h2>
        <div className='group relative md:ml-2'>
 <BsChevronCompactLeft onClick={(()=> handleScroll("left"))}  className={`${!isIScroll && "hidden"} absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 `}/>
 <div 
 ref={rowRef}
 className=' flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2'>
    {
     movies && movies.map(movies =>(
        <div className='relative h-28 mix-w-[180px] cursor-pointer md:h-36 md:min-w-[260px] md:hover:scale-105'>
            <img src={BASE_IMAGE_URL + movies.backdrop_path || movies.poster_path}
            className='rounded-sm object-cover '
             alt=""
             />
        </div>
     ))
    }
 </div>
 <BsChevronCompactRight onClick={(()=> handleScroll("right"))} className=' absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100'/>

        </div>
    </div>
  )
}

export default Row