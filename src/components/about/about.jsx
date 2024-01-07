import React from 'react';
import Button from "react-bootstrap/Button";
const About = () => {
    return (
        <>
            <div className="row p-5 bg-light">
          <h2 className="col-2">
            about me
          </h2>
          <div className="col-10">
            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
              labore temporibus quibusdam hic deserunt nemo illo, tempora
              possimus eum enim! Neque, id! Ullam laudantium veritatis iure
              fugiat hic illo velit! Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Iure labore temporibus quibusdam hic deserunt
              nemo illo, tempora possimus eum enim! Neque, id! Ullam laudantium
              veritatis iure fugiat hic illo velit!
            </p>
            {/* <Button variant="dark">CONTACT ME</Button> */}
            <Button variant="dark"><a href="Marim Mohmed CV..pdf" download='Marim_cv' className="btn btn-dark text-decoration-none fw-bold fs-5"> download</a></Button>
          </div>
        </div>
        </>
    );
}

export default About;
