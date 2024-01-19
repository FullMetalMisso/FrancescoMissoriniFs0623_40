export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE'
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE'
export const GET_SONGS = 'GET_SONGS'
export const UPDATE_TRACK = 'UPDATE_TRACK'

const baseEndpoint = 'https://striveschool-api.herokuapp.com/api/deezer/search?q='


export const updateTrackAction = (track) => ({
    type: UPDATE_TRACK,
    payload: track
})

export const addToFavouriteAction = (song) => ({
  type: ADD_TO_FAVOURITE,
  payload: song,
})

export const removeFromFavouriteAction = (i) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: i,
})

export const getSongsAction = (genere) => {
    let headers = new Headers({
        headers: { 
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhNTY5YzE4N2U1YzAwMTgxNGM2YjQiLCJpYXQiOjE3MDU2NjIxMDgsImV4cCI6MTcwNjg3MTcwOH0.aBztB7t0GA8QRopl6rgganyDdrzE7DVzdja5mvqIXmE" 
            }
      })
  return async (dispatch) => {
    try {
      const response = await fetch(
        baseEndpoint +
          genere,
        {
          method: 'GET',
          headers,
        })
      if (response.ok) {
        const { data } = await response.json()
        console.log(data)

        dispatch({
          type: GET_SONGS,
          payload: data,
          genere
        });
      } else {
        alert('Error fetching results');
      }
    } catch (error) {
      console.log(error);
    }
  };
};