import React from 'react';
import Card from 'react-bootstrap/Card';

const Cardes = (props) => {
    return (
        <div className='col-4 '>
      <Card
          key={props.keycard}
          style={{ width: '18rem', height: '11rem'}}
          className={` ${props.bgcolor} text-light p-5 mb-3  text-center`}>
          <Card.Body>{props.cardtitle} 
          </Card.Body>
        </Card>
    </div>
    );
}

export default Cardes;
