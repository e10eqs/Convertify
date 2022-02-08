import React, { useEffect, useState } from "react";
import "./Login.css";
import { SpotifyAuth, Scopes } from "react-spotify-auth";
import "react-spotify-auth/dist/index.css";
import SpotifyWebApi from "spotify-web-api-node/src/spotify-web-api";
import Playlist from "./Playlists/Playlist";

function Login(props) {
  const [playlists, setPlaylists] = useState([]);
  const [offset, setOffset] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    let spotifyApi = new SpotifyWebApi();
      spotifyApi.setAccessToken(props.token);
      spotifyApi.getMe()
        .then((data) => {
            console.log(data.body.id);
            setUser(data.body.id)

            //get playlists from user for first run after token
            spotifyApi.getUserPlaylists(data.body.id, { limit: 10, offset: offset })
            .then((data) => {
                console.log(data.body.items);
                setPlaylists(playlists.concat(data.body.items));
            });
        });
    }, [props.token]);

    //get playlists as array
    useEffect(() => {
        if (props.token && user) {
            let spotifyApi = new SpotifyWebApi();
            spotifyApi.setAccessToken(props.token);
            spotifyApi.getUserPlaylists(user, { limit: 10, offset: offset })
            .then((data) => {
                console.log(data.body.items);
                setPlaylists(playlists.concat(data.body.items));
            });
        }
    }, [props.token, offset]);

  return (
    <div>
        <div className="Login">
            <h1>Convert from Spotify to AppleMusic</h1>
            {props.token ? (
            <h1>TOKEN</h1>
            ) : (
            <SpotifyAuth
                //info from spofity for developers dashboard
                redirectUri= "http://localhost:3000/Spotify" // change to your ip address
                clientID="4f3b7b53fbe84932818e9f98016b2c69"
                scopes={[
                    Scopes.playlistReadPrivate,
                    Scopes.playlistReadCollaborative,
                    Scopes.userLibraryModify,
                ]}
                onAccessToken={(token) => props.setToken(token)}
            />
            )}
        </div>
        <div className="Playlists">
            {playlists &&
            playlists.map((playlist, index) => (
                <Playlist
                key={index}
                name={playlist.name}
                img={playlist.images[0].url}/>
            ))}
        </div>
      <div>
        <button className="LoadMore" onClick={() => setOffset(offset + 10)}>
            Load More
        </button>
      </div>
    </div>
  );
}

export default Login;
