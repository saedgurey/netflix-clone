import React from 'react'
import Header from '../components/browse/Header'
import Banner from '../components/browse/Banner'
import Row from '../components/browse/Row'
import requests from "../request";
import MovieModal from '../components/MovieModal';

const Browse = () => {
  return (
    <div className='relative h-screen lg:h-[140vh] bg-gradient-to-b '>
        <Header/>
        <main className='relative pl-4 lg:pl-10 space-y-24'>
          <Banner />
          <Row title={"Trending Now"} url={requests.fetchTrending}/>
          <Row title={"ActionsMovies "}url={requests.fetchActionMovies}/>
          <Row title={"Top rated "} url={requests.fetchTopRated}/>
          <Row title={"Romance Movie"} url={requests.fetchRomanceMovies}/>
          <Row title={"Horror Movies "} url={requests.fetchHorrorMovies}/>
          <Row title={"Documentries "} url={requests.fetchDocumantaries}/>
          <Row title={"Comedy Movie "} url={requests.fetchComedyMovies}/>
          <MovieModal/>
        </main>
    </div>
  )
}

export default Browse