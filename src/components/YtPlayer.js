import React from 'react';

let demoId = 'ioNhJtPV-9Q'

const YtPlayer = ({ totalSongs, playlist, newSong, song=JSON.stringify(playlist[0])  }) => (
    <div>
            <p>{console.log(song, typeof song)}</p>
            <iframe className="ytPlayer" width="100%" height="300" src={`https://www.youtube.com/embed/${demoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>

)

export default YtPlayer;