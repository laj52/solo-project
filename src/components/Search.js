import React, { Component } from 'react';
const Search = ({
    newSong,
    searchSong
  }) => (
    <div >
        <select name="platform" id="platformSelect">
            <option value="yt">YouTube</option>
            <option value="sc">SoundCloud</option>
        </select>
        <input type="text" onChange={e => searchSong(e.target.value)} id="search" placeholder="Search for music..."/>
                <p>{console.log(newSong)}</p>
        <button type="submit" id="searchButton">search</button>
    </div>
);
  
  export default Search;