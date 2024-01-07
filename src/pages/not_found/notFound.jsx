import React from 'react';
import './notFound.css'
import { useNavigate } from 'react-router-dom';
const NotFound = () => {
  let navigate= useNavigate()
 let goHome=()=>{
  navigate("/")
  }
 let goBack=()=>{
  navigate(-1)
  }

    return (
        <div>
            <div id="background"></div>
<div id="top">
  <h1 id="h1">404</h1>
  <h3 id="h3">page not found</h3>
</div>
<div id="container">
  <div id="ghost-copy">
    <div id="one"></div>
    <div id="two"></div>
    <div id="three"></div>
    <div id="four"></div>
  </div>
  <div id="ghost">
    <div id="face">
      <div id="eye"></div>
      <div id="eye-right"></div>
      <div id="mouth"></div>
    </div>
  </div>
  <div id="shadow"></div>
</div>
<div id="bottom">
  <p id='p'>Boo, looks like a ghost stole this page!</p>
  <div id="buttons">
    <button id="btn" onClick={()=>{goBack()}}>Back</button>
    <button id="btn" onClick={()=>{goHome()}}>Home</button>
  </div>
</div>
<footer id='footer'>
  <p id='p'>made by <a href="https://codepen.io/juliepark"> julie</a> ♡</p>
</footer>
        </div>
    );
}

export default NotFound;
