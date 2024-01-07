import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import axiosInstance from '../../axiosConfig/instanc'
import { useSelector } from 'react-redux';
import Spinners from './../../components/spinner/spinner';
import Faves from './../faves/faves';
import CircularProgress from '@mui/material/CircularProgress';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Pagination, Rating } from '@mui/material';
const SinglePage = () => {
  let { id } = useParams()
  const loader = useSelector((state) => state.loader.loader)
  // const deleteFavorite = useSelector((state) => state.favorites.deleteFavorite)

  const [movie, setMovie] = useState({})
  const [logos, setLogos] = useState([]);
  const [genre, setGenres] = useState([]);
  const [countries, seCountries] = useState([]);
  useEffect(() => {
    axiosInstance.get(`/movie/${id}`).then((res) => {
      console.log(res.data);
      setMovie(res.data)
      setLogos(res.data.production_companies);
      setGenres(res.data.genres);
      seCountries(res.data.production_countries);
    }).catch(() => {
      console.log("err")
    })

    // setLogo({...logo,logo:[movie.production_companies]})
  }, [])
  return (
    <div>
      {loader ? <Spinners /> :

        <div className='row my-5'>

          <Card border="success" className='col-5 me-5 p-0'>
            <Card.Header className='d-flex justify-content-around fw-bold'>{movie.title}</Card.Header>
            <Card.Body className='p-0'>
              {movie.backdrop_path ?
                <img id='img' src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} className='w-100 h-100' />
                : (<Spinners />)}
              {/* {(Object.keys(movie).length)?<img id='img' src={`https://image.tmdb.org/t/p/w500${movie.production_companies[0].logo_path}`}
               alt={movie.title} className='w-100' />)):<h1>ddddddddd</h1>} */}
            </Card.Body>
          </Card>
          <Card border="success" className='col-6'>
            <Card.Header className='d-flex justify-content-around fw-bold'>
              <Card.Text>Status  {movie.status}</Card.Text>
            </Card.Header>
            <Card.Body>
              <Card.Text> {movie.release_date} {countries.length ? (countries.map((country, i) => (
                  <span key={i}>({country.iso_3166_1}) <FontAwesomeIcon icon={faCircle} style={{ fontSize: '.5vw' }} /> </span>))) : (<Spinners />)}
                <span className='opacity-50'>
                  {genre.length ? (genre.map((genr, i) => (
                    <span key={i}> {genr.name} {(i < genre.length - 1) ? ',' : ''} </span>))) : (<Spinners />)}</span>
                    <FontAwesomeIcon icon={faCircle} style={{ fontSize: '.5vw' }} /> {movie.runtime}m
              </Card.Text>
              <div className='fw-bold'>overview </div>
              {movie.overview ? <Card.Text className='my-3'>{movie.overview}</Card.Text> : (<Spinners />)}
              <Card.Text className='fw-bold'>original language : {movie.original_language}</Card.Text>
              <div className='d-flex justify-content-between mp-5'>
                <Faves movie={movie} />
                <div>
                  <Rating name="read-only" value={movie.vote_average/2} readOnly />
                  <span className='fw-bold'> {movie.vote_count} vote</span>
                </div>
              </div>
            </Card.Body>
          </Card>
          <div className='d-flex justify-content-center dorder mt-5'>
            {logos.length ? (logos.map((logo, i) => (
              <img id='img' src={`https://image.tmdb.org/t/p/w500${logo.logo_path}`} alt={movie.title} className='col-1 mx-5' style={{ width: '4rem' }} key={i} />
            ))) : (<Spinners />)}
          </div>
        </div>
      }
    </div>
  );
}

export default SinglePage;





