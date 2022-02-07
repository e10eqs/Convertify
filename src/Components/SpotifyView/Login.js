import React, { useEffect, useState } from 'react'
import './Login.css';
import { SpotifyAuth, Scopes } from "react-spotify-auth";
import "react-spotify-auth/dist/index.css";
import SpotifyWebApi from 'spotify-web-api-node/src/spotify-web-api';
import Playlist from './Playlists/Playlist';

function Login(props) {
    const [playlists, setPlaylists] = useState(null);

    //get playlists as array
    useEffect(() => {
        let spotifyApi = new SpotifyWebApi();
        spotifyApi.setAccessToken(props.token)
        spotifyApi.getUserPlaylists({'limit':50}).then(
            (data) => {
            console.log(data.body.items)
            setPlaylists(data.body.items)
        })
    }, [props.token]);

    return (
        <div>
            <div className="Login">
                <h1>Convert from Spotify to AppleMusic</h1>
                {props.token ?
                <h1>TOKEN</h1> :
                <SpotifyAuth
                    //info from spofity for developers dashboard
                    redirectUri="http://192.168.5.16:3000/Spotify"
                    clientID="4f3b7b53fbe84932818e9f98016b2c69"
                    scopes={[
                    Scopes.playlistReadPrivate,
                    Scopes.playlistReadCollaborative,
                    Scopes.userLibraryModify
                    ]}
                    onAccessToken={(token) => props.setToken(token)}/>
                }
            </div>
            <div className='Playlists'>
                {playlists ?
                    playlists.map(playlist => {
                    return (
                    <Playlist name={playlist.name} img={playlist.images[0].url} tracks={playlist.tracks.total} />
                    )}) :
                    null
                }
            </div>
        </div>
    );
}

export default Login;
