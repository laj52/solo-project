import * as types from '../constants/actionTypes';

const initialState = {
    totalSongs: 0,
    playlist: [],
    searchSong: '',
    saved: true
}

const playlistReducer = (state=initialState, action) => {
    switch (action.type) {
        //case types for play the playlist, for add song...

        //for search song
        case types.SEARCH_SONG:
          return {
            ...state,
            searchSong: action.payload,
            saved: true
          };

        //... for save playlist
        // case types.SAVE_PLAYLIST:
        //   return {
        //     ...state,
        //     saved: true
        //   };

        //case type for load playlist
        case types.LOAD_PLAYLIST:
          console.log(action.payload)
          return {
            ...state,
            totalSongs: action.payload.length,
            playlist: action.payload,
            searchSong: '',
            saved: true
          };

        default:
            return state; 
    }
};

export default playlistReducer;