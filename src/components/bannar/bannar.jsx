import React from 'react';
import Button from "react-bootstrap/Button";
import "./bannar.css";
const Bannar = () => {
    return (
        <div>
            <div className="p-5" id="darkImg">
          <h2 className="text-white">Marim Mohmed</h2>
          <p className="text-white">web developer & desiger</p>
          <Button variant="outline-light">CONTACT ME</Button>
        </div>
        </div>
    );
}

export default Bannar;
