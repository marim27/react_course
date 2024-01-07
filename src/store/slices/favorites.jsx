import { createSlice } from "@reduxjs/toolkit";
const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    setFavorite: JSON.parse(localStorage.getItem("favorites")) || [],
  },
  reducers: {
    setFavMovie: (state, action) => {
      const saveFavorites = [...state.setFavorite, action.payload]
      localStorage.setItem("favorites", JSON.stringify(saveFavorites));
      return { ...state, setFavorite:  saveFavorites};

      
      // return { ...state, setFavorite: [...state.setFavorite, action.payload] };
    },
    deleteFavMovie: (state, action) => {

      const deleteFavorites = state.setFavorite.filter((movie) => movie.id !== action.payload)
      localStorage.setItem("favorites", JSON.stringify(deleteFavorites));
      return ({ ...state, setFavorite: deleteFavorites });
      
      // return ({ ...state, setFavorite: state.setFavorite.filter((movie) => movie.id !== action.payload)} );
    },
  },
});
export const { setFavMovie, deleteFavMovie } = favoritesSlice.actions;

export default favoritesSlice.reducer;