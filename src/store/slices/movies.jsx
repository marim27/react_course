import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../axiosConfig/instanc';

export const getAllMovies = createAsyncThunk('movies', async (page) => {
  const response = await axiosInstance.get('/movie/popular', {
    params: { page: page }
  });
  return response.data.results;
});

export const saerchMovies =createAsyncThunk('search',async (movieName) => {
      const response = await axiosInstance.get(`/search/movie`, {
          params: { query: movieName }
      });
    return response.data.results;
}) 


const moviesSlice = createSlice({
  name: 'movies',
  initialState: { movies: [] },
  extraReducers: (builder) => {
    builder.addCase(getAllMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(saerchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },

});


export default moviesSlice.reducer;