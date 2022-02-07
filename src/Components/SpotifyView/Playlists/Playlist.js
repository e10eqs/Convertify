import React from "react";
import "./Playlist.css";

//Playlist view for mapping
function Playlist(props) {
    const handleClick = () => {
        console.log(props.name)
    }
    return (
        <div className="Playlist">
            <img src={props.img} className="Image"></img>
            <h1>{props.name}</h1>
            <button className="Convert"
            onClick={handleClick}>Convert</button>
        </div>
    );
}

export default Playlist;
