import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from '../actions'

const initialState = {
  list: [],
}

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVOURITE':
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case 'REMOVE_FROM_FAVOURITE':
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default favouriteReducer;
