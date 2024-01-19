import {UPDATE_TRACK} from '../actions'

const initialState = {
    song:{},
};


const updateTrackReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_TRACK:
        return {
          ...state,
          song: {
            ...state.song,
            track: action.payload,
          },
        };
      default:
        return state;
    }
  };

  export default updateTrackReducer