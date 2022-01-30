import './App.css';
import { SpotifyAuth, Scopes } from "react-spotify-auth";
import "react-spotify-auth/dist/index.css";

function App() {
  return (
    <div className="App">
      <SpotifyAuth
        redirectUri="http://0.0.0.0:3000/login"
        clientID="3a0bb9cb01064342a98cdd0246338d8d"
        scopes={[
          Scopes.streaming,
          Scopes.appRemoteControl,
          Scopes.userReadPlaybackState,
          Scopes.userModifyPlaybackState,
          Scopes.playlistModifyPrivate,
          Scopes.playlistModifyPublic,
        ]}
      />
    </div>
  );
}

export default App;
