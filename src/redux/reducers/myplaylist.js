import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from '../actions'

const initialState = {
  list: [],
}

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      const newSong = action.payload;
      const isAlreadyInFavourites = state.list.some(song => song.id === newSong.id);

      if (!isAlreadyInFavourites) {
        return {
          ...state,
          list: [...state.list, newSong],
        };
      }
      return state;

    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        list: state.list.filter((fav, i) => i !== action.payload),
      };

    default:
      return state;
  }
}

export default favouriteReducer;
