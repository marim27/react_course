const Initial_state  = {
    setFavorite: [],
  };
  
  export default function favoritesReducer(state = Initial_state , action) {
    switch (action.type) {
      case 'SETFAVMOVIE':
        return { ...state, setFavorite: [...state.setFavorite, action.payload] };
      case 'DELETEFAVMOVIE':
        return { ...state, setFavorite: state.setFavorite.filter((movie) => movie.id !== action.payload) };
      default:
        return state;
    }
  }
  