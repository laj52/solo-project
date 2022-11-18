import React, { Component } from 'react';

class ScPlayer extends Component {

    render(){

        return(
            <iframe className="scPlayer" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/90243754&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        )

    }

};

export default ScPlayer;