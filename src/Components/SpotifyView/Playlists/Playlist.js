import React from "react";
import "./Playlist.css";

//Playlist view for mapping
function Playlist(props) {
    return (
        <div className="Playlist">
            <img src={props.img} className="Image"></img>
            <h1>{props.name}</h1>
            <h1>{props.tracks}</h1>
        </div>
    );
}

export default Playlist;
