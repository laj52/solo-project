import React from 'react';
import { connect } from 'react-redux';
import ScPlayer from '../components/ScPlayer';
import YtPlayer from '../components/YtPlayer';
import SearchContainer from './SearchContainer';
// import * as actions from '../actions/actions';


const mapStateToProps = ({ songlist: { totalSongs, playlist, newSong } }) => ({
    totalSongs,
    playlist,
    newSong
});

const mapDispatchToProps = (dispatch) => ({
    savePlaylist: () => dispatch(actions.savePlaylist()),
  });

const MainContainer = (props) => (
    <div id="MainContainer">
        <h1>hello world, goodbye moon</h1>
        <p>{console.log(props)}</p>
        <SearchContainer />
        <ScPlayer {...props}/>
        <YtPlayer {...props}/>
    </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);