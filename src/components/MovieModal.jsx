import { Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from './atom/atom'
import ReactPlayer from 'react-player'
import { FaPause, FaPlay, FaPlus } from 'react-icons/fa';
import { BsVolumeUp, BsFillVolumeOffFill  } from 'react-icons/bs';
import { HiThumbDown, HiThumbUp  } from 'react-icons/hi';
import axios from 'axios'

const MovieModal = () => {
  const [showModal, setShowModal]=useRecoilState(modalState);
  const [movie, setMovie]=useRecoilState(movieState);
  const [key, setKey]=useState("");
  const [isPlaying, setIsPlaying]=useState(false);
  const [isMuted, setIsMuted]=useState(false);
  const [genres, setGenres]=useState([false]);




  const handleClose = () => {
    setShowModal(false);
    setMovie(null);
  }

  useEffect(()=>{
  const fetchMovieTrail = async()=>{
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${
        movie?.media_type === "tv" ? "tv" : "movie"
      }/${movie?.id}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&append_to_response=videos`
    );
    setGenres(data?.genres)
    console.log("data", data);
    console.log("data", data?.videos.results[0].key);
    setKey(data?.videos.results[0].key);
  }
  console.log("movie", movie);
  fetchMovieTrail();
  },[movie])


  return (
  <Modal

    className='fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl rounded-md  '
     open={showModal}
     onClose={handleClose}
     aria-labelledby="modal-modal-title"
     aria-describedby="modal-modal-description"
     
>
  <>
 <div className='relative pt-[56.24%]'>
 <ReactPlayer
 width="100%" 
 height="100%"
 style={{position: "absolute", top:0, left:0,}}
 url={`https://www.youtube.com/watch?v=${key}`}
 playing={isPlaying}
 muted={isMuted}
 />

 <div className='absolute bottom-10 flex w-full  items-center justify-between px-10'>
  <div className='flex space-x-2'>
    <button  className="flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6] cursor-pointer ">
    {" "}
    {isPlaying ? <FaPause  onClick={()=> setIsPlaying(false)}  className="h-7 w-7 text-black"/>: 
    <FaPlay onClick={()=> setIsPlaying(true)} className='h-7 w-7'/> 
    }
    </button>

    <button className=" flex h-11 w-11 items-center justify-center  rounded-full border-2 border-[gray] bg-[#2a2a2a]/60 hover:border-white hover:bg-white/10 cursor-pointer">
    {" "}
    <FaPlus className="h-7 w-7 text-black"/>
    </button>
  
    <buttton  className="modal-btn">
       <HiThumbUp className='h-9 w-6'/>
       
    </buttton>
  </div>
  <div className='flex items-center'>
   {isMuted ? <BsFillVolumeOffFill onClick={()=> setIsMuted(false)}  className='w-7 h-7'/> : <BsVolumeUp onClick={()=> setIsMuted(true)}  className='w-7 h-7'/> }
    
  </div>
 </div>
 </div>

 <div className='flex flex-col space-y-2 rounded-b-md bg-[#181818] px-10 '>
  <div className=' space-y-6 text-lg '>
    <div className=' flex  items-center space-x-2'>
         <p className='font-semibold text-green-400'>{movie?.vote_average * 10} % Match</p>
         <p className='font-light'>{movie?.release_date || movie?.first_air_date}</p>
                                    
         <div className='flex h-d items-center justify-center rounded border border-white/40 px-1.5 text-xs'>HD</div>
    </div>
  </div>
  <div className=' flex flex-col  font-light'>
    <p className='w-5/6'> {movie?.overview}</p>
    <div className='text-gray-400'> 
      <span>genres:</span>
      {genres.map(genre =>
        genre.name).join(", ")
        }
      </div> 

       <div >
        <span className='text-gray-400'>Original Language:</span>
        {movie?.original_language}
       </div>

       <div >
        <span className='text-gray-400'>Total Votes:</span>
        {movie?.vote_count}
       </div>
  </div>
 </div>
</>
</Modal>
   
  )
}

export default MovieModal;