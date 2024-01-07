import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Searchmovie = () => {
  const Search= useSearchParams()
  console.log(Search);
    return (
        <div>
            
        </div>
    );
}

export default Searchmovie;
