# Convertify

## Goals
App Flow
- Login
    - Apple or Spotify
- Uplod a playlist
- Get a link to covert the playlist
- Share link
- Another user opens link and can download the playlist
    - with preview

## How
- React App webiste
    - handles auth and conversion
- Python API backend
    - stores and exports conversion

## Things We've learned
- Mapping is sick (in Login.js)
    ```
    playlists.map((playlist, index) => (
         <Playlist
            key={index}
            name={playlist.name}
            img={playlist.images[0].url}/>
            )}
    ```

- Spotify API is in dev mode by default - need to add users (in development console)
- useEffect is very good, nesting API calls can be very powerful for rendering a page on token (also Login.js)
    ```
    useEffect(() => {
        if (props.token) {
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
        }
      }, [props.token]);
    ```
- CSS is admittedly useful
