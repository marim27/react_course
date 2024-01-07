import React from 'react';
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter ,faFacebookF,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope ,faPhone} from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return (
        <div className="container bg-dark text-light p-5 my-3 d-flex">

        <div className="col-2">
          <div>GET IN TOUCH</div>
          <div><FontAwesomeIcon icon={faEnvelope} className='me-1'/> marim@yahoo.com</div>
          <div><FontAwesomeIcon icon={faPhone} className='me-1'/> 123-456-789</div>
        </div>
        <div className="col-3"></div>
        <div className="col-2 pt-4">
          <Button variant="outline-light">CONTACT ME</Button>
        </div>
        <div className="col-3" ></div>
        <div className="col-2">
        <FontAwesomeIcon icon={faLinkedin} className='me-4 fs-5'/>
        <FontAwesomeIcon icon={faFacebookF} className='me-4 fs-5'/>
        <FontAwesomeIcon icon={faTwitter} className='fs-5'/>
        </div>
      </div>
    );
}
export default Footer;
