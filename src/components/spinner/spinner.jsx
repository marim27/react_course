import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Spinners = () => {
    return (
        <div className='m-5 d-flex justify-content-around'>
            <Spinner animation="border" variant="dark" />
            <Spinner animation="border" variant="success" />
            <Spinner animation="border" variant="dark" />
            <Spinner animation="border" variant="success" />
            <Spinner animation="border" variant="dark" />
            <Spinner animation="border" variant="success" />
        </div>
    );
}

export default Spinners;
