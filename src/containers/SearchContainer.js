import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';

import Search from '../components/Search';
import ResultsDisplay from '../displays/ResultsDisplay';

const mapStateToProps = ({ songlist: { totalSongs, playlist, newSong } }) => ({
    totalSongs,
    playlist,
    newSong
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const SearchContainer = props => (
     <div className="add-Song">
        <h1>Add songs here</h1>
        <h2>Pick your platform and search!</h2>
        <Search />
    </div>
)
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);