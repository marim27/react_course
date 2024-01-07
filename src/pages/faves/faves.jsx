import React from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import setFavorites, { deleteFavorites } from './../../store/actions/favorites_action';
import { deleteFavMovie, setFavMovie } from '../../store/slices/favorites';
const Faves = ({movie}) => {
    const favorite = useSelector((state) => state.favorites.setFavorite);
    // console.log(favorite);
    const isFavorite = favorite.some((fav) => fav.id == movie.id);

    const dispatch = useDispatch();

    const AddToFavorites = () => {
        dispatch(setFavMovie(movie));
      };

      const RemoveFromFavorites = () => {
        dispatch(deleteFavMovie(movie.id));
      };
  
    return (
        <div>
           <div onClick={!isFavorite ? AddToFavorites: RemoveFromFavorites}>
 {isFavorite ?<FontAwesomeIcon icon={faHeart} className='fs-4' style={{color:'green'}}/>: <FontAwesomeIcon icon={faHeart} className='fs-4' />}
                </div>
        </div>
    );
}
export default Faves;
