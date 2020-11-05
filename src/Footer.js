import React from 'react'
import './Footer.css';
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";

import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

function Footer() {

    const play = () => {
        // spotify.play();
    };

    return (
        <div className="footer">
            <div className="footer_left">
                <img className="footer_albumlogo" src="https://i.scdn.co/image/ab67616d0000b27391b1034d2469a694464736be" alt=""/>
                <div className="footer_songInfo">
                    <h4>Champion</h4>
                    <p>DJ Bravo</p>
                </div>
            </div>
            <div className="footer_center">
                <ShuffleIcon className="footer_green"/>
                <SkipPreviousIcon className="footer_icon"/>
                <PlayCircleOutlineIcon onClick={play} fontSize="large" className="footer_icon"/>
                <SkipNextIcon className="footer_icon"/>
                <RepeatIcon className="footer_green"/>    
            </div>
            <div className="footer_right">
                <PlaylistPlayIcon className="right_icons"/>
                <VolumeDownIcon className="right_icons"/>
                <Slider className="slider"/>
            </div>

        </div>
    )
}

export default Footer
