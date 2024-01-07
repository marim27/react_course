import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
// import axiosInstance from '../../axiosConfig/instanc';
import Form from 'react-bootstrap/Form';
import Pagination from './../../components/pagination/pagination';
import { useSelector, useDispatch } from 'react-redux';
import Spinners from '../../components/spinner/spinner';
import Faves from './../faves/faves';
import { getAllMovies, saerchMovies } from '../../store/slices/movies';
import axiosInstance from './../../axiosConfig/instanc';

const Home = () => {
    // const [movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const loader = useSelector((state) => state.loader.loader)
    // const movies = useSelector((state) => state.movies.movies);
    // console.log(movies);
    const dispatch = useDispatch();

    // useEffect(() => {
    //   dispatch(getAllMovies(currentPage));
    // }, [currentPage]);


    const movies = useLoaderData()

    const saerch = (movieName) => {
        dispatch(saerchMovies(movieName));
    };

    // useEffect(() => {
    //     // axiosInstance.get(`/movie/popular`).then((res )=>{
    //     //     console.log(res.data.results);
    //     //     setMovies(res.data.results);
    //     // }).catch(()=>{
    //     //   console.log("err")
    //     // })

    //     // get all movies functions
    //     const getAllMovies = async (page) => {
    //         try {
    //             const response = await axiosInstance.get(`/movie/popular`, {
    //                 params: { page: page }
    //             });
    //             setMovies(response.data.results);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    //     getAllMovies(currentPage)
    // }, [currentPage])
    // // saerch Movies function
    // const saerch = (movieName) => {
    // try {
    //     const response = await axiosInstance.get(`/search/movie`, {
    //         params: { query: movieName }
    //     });
    //     setMovies(response.data.results);
    // } catch (err) {
    //     console.log(err);
    // }
    // };

    return (
        <>
            <Form.Control className='my-5' type='saerch' name='userName' placeholder="search for movie name" onChange={(e) => saerch(e.target.value)} />
            {/* conditionL RENDERING */}
            {loader ? <Spinners /> :
                <div className=''>
                    <div className='row ms-5 d-flex justify-content-center'>
                        {movies.map((movie) => (
                            <Card border="success" className='col-2 m-3 p-0' key={movie.id}>
                                <Card.Body className='p-0'>
                                    <Link to={`/details/${movie.id}`}>
                                        {movie.backdrop_path ?
                                            <img id='img' src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} className='w-100' style={{ height: '20rem' }} />
                                            : (<Spinners />)}

                                    </Link>
                                    <Card.Text className='fw-bold m-0 px-1'>{movie.title}</Card.Text>
                                    <div className='d-flex justify-content-between px-1'>
                                        <Card.Text>{movie.release_date}</Card.Text>

                                        <Faves movie={movie} />

                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                    <Pagination setCurrentPage={setCurrentPage} />
                    {/* <Pagination count={1000} color="secondary" onClick={() => setCurrentPage((prev) => prev + 1)}/>
                    <Pagination count={10} page={currentPage} onChange={() => setCurrentPage((prev) => prev + 1)} /> */}
                </div>
            }

        </>
    );
}

export const loader = async (page) => {
    try {
        const response = await axiosInstance.get('/movie/popular', {
            params: { page: page }
        });
        return response.data.results;
    } catch (err) {
        console.log(err);
        return err
    }
}

export default Home;