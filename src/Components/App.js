import React, { useState} from "react";
import "./App.css";
import { Router, navigate } from "@reach/router";
import Spotify from "./SpotifyView/Login";
import About from "./About/About";
import Home from "./Home/Home";
import Cookies from "js-cookie";

//Dummy component - will update with real component later
const AppleMusic = () => (
    <div>
        <h2>Apple Music</h2>
    </div>
);

function App() {
    //Tokens here so we can set status flags in the main screen
    const [spotifyToken, setSpotifyToken] = useState(Cookies.get("spotifyAuthToken"));
    const [appleToken, setAppleToken] = useState(Cookies.get("appleAuthToken"));

    return (
        <div>
            <div className="TopBar">
                <h1 style={{ cursor: "pointer" }} onClick={async () => navigate("/")}>
                    Convertify
                </h1>
            {spotifyToken ? (
                <div className="TopBar StatusBar">
                    <h4>Spotify</h4>
                    <div className="StatusCircle StatusAuth"></div>
                </div>
                ) : (
                <div className="TopBar StatusBar">
                    <h4>Spotify</h4>
                    <div className="StatusCircle StatusNoAuth"></div>
                </div>
                )}
            </div>

            <div className="MenuContainer">
                <button className="MenuItem" onClick={async () => navigate("/Spotify")}>
                    Spotify
                </button>
                <button className="MenuItem"
                onClick={async () => navigate("/AppleMusic")}>
                    Apple Music
                </button>
                <button className="MenuItem" onClick={async () => navigate("/About")}>
                    About
                </button>
            </div>

            <Router>
                <Home path="/" />
                <Spotify
                    token={spotifyToken}
                    setToken={setSpotifyToken}
                    path="/Spotify"
                />
                <About path="/About" />
                <AppleMusic path="/AppleMusic" />
            </Router>
        </div>
    );
}

    export default App;
