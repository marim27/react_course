import React from 'react';
import { Navigate } from 'react-router-dom';

const Guard = ({isLogin,children}) => {
    // console.log(isLogin,children);
   if (isLogin==false){
   return <Navigate to="/contact"/>
   }else{
    return children;
   }
}

export default Guard;
