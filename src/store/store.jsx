// import {legacy_createStore as createStore } from "redux";
// import { composeWithDevTools } from '@redux-devtools/extension';
// import combineReducers from './reducers/conbine';
import { configureStore } from "@reduxjs/toolkit";
import favorites from "./slices/favorites";
import loader from "./slices/loader";
import movies from "./slices/movies";


// const store=createStore(combineReducers,composeWithDevTools());

const store=configureStore({
    reducer:{
        loader:loader,
        favorites:favorites,
        movies:movies
    }
})
export default store;