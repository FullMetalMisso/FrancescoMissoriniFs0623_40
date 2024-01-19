import { configureStore, combineReducers } from '@reduxjs/toolkit'
import favouriteReducer from '../reducers/myplaylist'
import songsReducer from '../reducers/songs'
import updateTrackReducer from '../reducers/updateTrack'

const bigReducer = combineReducers({
  favourite: favouriteReducer,
  songs: songsReducer,
  track: updateTrackReducer
})

const store = configureStore({
  reducer: bigReducer,
})

export default store