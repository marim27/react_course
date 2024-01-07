
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faR, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faLinkedin, faKaggle } from '@fortawesome/free-brands-svg-icons'
import './header.css'
import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import axiosInstance from '../../axiosConfig/instanc';
import { saerchMovies } from '../../store/slices/movies';
import { langContexts } from './../../contexts/language';
import { useContext } from 'react';
const Header = () => {
  const {lang,setLang}=useContext(langContexts)
  const favorite = useSelector((state) => state.favorites.setFavorite)
  const dispatch = useDispatch();
  // let navigate= useNavigate()
  const saerch = (movieName) => {
    dispatch(saerchMovies(movieName));
  };
  return (
    <div>
      <Form.Control className='my-5' type='saerch' name='userName' placeholder="search for movie name" onChange={(e) => saerch(e.target.value)} />

      <div className="bg-light pt-4">
        <div className="container pb-3">
          <div className="row">
            <div className="col-1">
              <FontAwesomeIcon icon={faKaggle} className='fs-1' />
              <FontAwesomeIcon icon={faR} className='fs-1' />
            </div>
            <NavLink to="/" className="col-2 text-decoration-none fw-bold fs-5 link" >HOME</NavLink>
            <NavLink to="/about" className="col-2 text-decoration-none fw-bold fs-5 link">ABOUT</NavLink>
            <NavLink to="/project" className="col-2 text-decoration-none fw-bold fs-5 link">PROJECTS</NavLink>
            <NavLink to="/contact" className="col-2 text-decoration-none fw-bold fs-5 link">CONTACT</NavLink>
            <NavLink to="/favorites" className="col-1 text-decoration-none fw-bold fs-5 link"> <FontAwesomeIcon icon={faHeart} className='fs-2' /> {favorite.length}</NavLink>
            <NavLink className="col-1 text-decoration-none fw-bold fs-5 link" onClick={()=>setLang(lang=='en'?'ar':'en')}>{lang}</NavLink>
            <div className="col-1">
              <FontAwesomeIcon icon={faLinkedin} className='me-2 fs-5' />
              <FontAwesomeIcon icon={faFacebookF} className='me-2 fs-5' />
              <FontAwesomeIcon icon={faTwitter} className='fs-5' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
