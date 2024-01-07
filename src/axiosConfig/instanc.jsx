import axios from "axios";
import store from './../store/store';
import loaderSpinner from './../store/actions/loader_action';
import setFavorites from './../store/actions/favorites_action';
import { changLoader } from "../store/slices/loader";
const axiosInstance= axios.create({
    baseURL:'https://api.themoviedb.org/3'
    ,
    headers:{
        Authorization:'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWQ1OGVmOGZlOWVlMDQ3NWVlNDQzNWZiYzFmYWE3MiIsInN1YiI6IjY0ZWE1M2IzNTk0Yzk0MDBlMjYwM2Y0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.77ikDw1J1MNl1E9upMOWwIs4jK0FuvFKJ_Nv57QojJk'
    },
    params:{
        api_key:'69d58ef8fe9ee0475ee4435fbc1faa72'
    },
})
// Create response interceptors
axiosInstance.interceptors.request.use((req)=>{
// store.dispatch(loaderSpinner(true))
store.dispatch(changLoader(true))
    return req
},(err)=>{
    return Promise.reject(err)
})
// Create response interceptors
axiosInstance.interceptors.response.use((res)=>{
    // store.dispatch(loaderSpinner(false))
    store.dispatch(changLoader(false))

    return res
},(err)=>{
    return Promise.reject(err)
})


export default axiosInstance;