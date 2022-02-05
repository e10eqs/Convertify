import './Login.css';
import { SpotifyAuth, Scopes } from "react-spotify-auth";
import "react-spotify-auth/dist/index.css";

function Login() {
  return (
    <div className="Login">
      <SpotifyAuth
        //info from spofity for developers dashboard
        redirectUri="http://192.168.5.16:3000"
        clientID="4f3b7b53fbe84932818e9f98016b2c69"
        scopes={[
          Scopes.playlistReadPrivate,
          Scopes.playlistReadCollaborative,
          Scopes.userLibraryModify
        ]}
      />
    </div>
  );
}

export default Login;
