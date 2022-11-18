import axios from 'axios';
import * as types from '../constants/actionTypes';


//const for play the playlist

//const for search song

export const searchSong = (data) => ({
    types: types.SEARCH_SONG,
    payload: data
})

//const for add song...

//...const for save playlist
// export const savePlaylist = () => (dispatch) => {
//     axios.put('/api/playlist', getState().playlist.playlist)
//     .then(({ status }) => {
//       if (status === 200) dispatch({ type: types.SAVE_PLAYLIST });
//     })
//     .catch(console.error);
// };

//load the current playlist

export const loadPlaylist = () => (dispatch) => {
    axios.get('/api/playlist').then(({ data }) => {
        const transl = JSON.parse(data);
        console.log(transl, transl.length);
        dispatch({
            type: types.LOAD_PLAYLIST,
            payload: transl
        })
    })
    .catch(console.error);
};