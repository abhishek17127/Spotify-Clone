import React from 'react'
import './Songs.css';

function Songs({ name, source }) {
    return (
        <div className="songs">
            <img src={source} alt="" className="song_image" />
            <p className="songName">{name}</p>
        </div>
    )
}

export default Songs
