import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import Spinners from './../../components/spinner/spinner';
import { deleteFavMovie } from '../../store/slices/favorites';

const Favorites = () => {
    const loader = useSelector((state) => state.loader.loader)
    const favorite = useSelector((state) => state.favorites.setFavorite)
    const dispatch = useDispatch();
    // console.log(favorite);
    return (
        <div>
{loader ? <Spinners /> :
                <div>
                    <div className='row ms-5'>
                        {favorite.map((movie) => (
                            <Card border="success" className='col-3 m-5 p-0' key={movie.id}>
                                <Card.Header  className='d-flex justify-content-between fw-bold'>
                                <Card.Text className='fw-bold'>{movie.title}</Card.Text>
                                    <FontAwesomeIcon icon={faHeart} className='fs-4'style={{color:'green'}}
                                     onClick={() => dispatch(deleteFavMovie(movie.id))}/>
                                    </Card.Header>
                                <Card.Body className='p-0'>
                                    <Link to={`/details/${movie.id}`}>
                                        <img id='img' src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                         alt={movie.title} className='w-100' />
                                    </Link></Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            }
        </div>
    );
}

export default Favorites;