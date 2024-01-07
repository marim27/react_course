import React from 'react';
import  Button  from 'react-bootstrap/esm/Button';

const Pagination = ({setCurrentPage}) => {
    return (
        <div>
               <div className='d-flex'>
         <Button variant=" btn btn-dark col me-4" onClick={() => setCurrentPage((prev) => prev - 1)}>Previous</Button>
         <div className="col-1">
                    <input type="radio" name="number" className="btn-check" id="one" />
                    <label className="btn btn-outline-dark col" htmlFor="one" onClick={() => setCurrentPage((prev) => prev = 1)}>1</label>
                </div>
                <div className="col-1">
                    <input type="radio" name="number" className="btn-check" id="two"/>
                    <label className="btn btn-outline-dark col" htmlFor="two" onClick={() => setCurrentPage((prev) => prev = 2)}>2</label>
                </div>
                <div className="col-1">
                    <input type="radio" name="number" className="btn-check" id="three"/>
                    <label className="btn btn-outline-dark col" htmlFor="three" onClick={() => setCurrentPage((prev) => prev = 3)}>3</label>
                </div>
                <div className="col-1">
                    <input type="radio" name="number" className="btn-check" id="four"/>
                    <label className="btn btn-outline-dark col" htmlFor="four" onClick={() => setCurrentPage((prev) => prev = 4)}>4</label>
                </div>
                <div className="col-1">
                    <input type="radio" name="number" className="btn-check" id="five"/>
                    <label className="btn btn-outline-dark col" htmlFor="five" onClick={() => setCurrentPage((prev) => prev = 5)}>5</label>
                </div>
                <div className="col-1">
                    <input type="radio" name="number" className="btn-check" id="six"/>
                    <label className="btn btn-outline-dark col" htmlFor="six" onClick={() => setCurrentPage((prev) => prev = 6)}>6</label>
                </div>
                <div className="col-1">
                    <input type="radio" name="number" className="btn-check" id="seven"/>
                    <label className="btn btn-outline-dark col" htmlFor="seven" onClick={() => setCurrentPage((prev) => prev = 7)}>7</label>
                </div>
                <div className="col-1">
                    <input type="radio" name="number" className="btn-check" id="eight"/>
                    <label className="btn btn-outline-dark col" htmlFor="eight" onClick={() => setCurrentPage((prev) => prev = 8)}>8</label>
                </div>
                <div className="col-1">
                    <input type="radio" name="number" className="btn-check" id="nine"/>
                    <label className="btn btn-outline-dark col" htmlFor="nine" onClick={() => setCurrentPage((prev) => prev = 9)}>9</label>
                </div>
                <div className="col-1">
                    <input type="radio" name="number" className="btn-check" id="ten"/>
                    <label className="btn btn-outline-dark col" htmlFor="ten" onClick={() => setCurrentPage((prev) => prev = 10)}>10</label>
                </div>
         <Button variant="btn btn-dark col" onClick={() => setCurrentPage((prev) => prev + 1)}>Next</Button>
        </div>
        </div>
    );
}

export default Pagination;
