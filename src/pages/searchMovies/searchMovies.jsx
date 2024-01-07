import React from 'react';
import './s.css'
import { CircularProgressbar } from 'react-circular-progressbar';
const SearchMovies = () => {
    return (
        <div>
<div style={{ width: 200, height: 200 }}>
  <CircularProgressbar value={66} />
</div>
        </div>
    );
}

export default SearchMovies;
