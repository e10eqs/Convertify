import './App.css';
import { Router, navigate } from "@reach/router"
import Login from './Login/Login'
import About from './About/About'

const Home = () => (
  <div>
    <h2>Apple Music</h2>
  </div>
);

function App() {
  return (
    <div className="App">
      <h1>Convertify</h1>
      <div className="MenuContainer">
        <button className="MenuItem"
          onClick={async () => navigate('/Login')}
        >
          Login
        </button>
        <button className="MenuItem"
          onClick={async () => navigate('/')}
        >
          Apple Music</button>
        <button className="MenuItem"
          onClick={async () => navigate('/About')}
        >
          About
        </button>
      </div>
      <Router>
        <Home path="/" />
        <Login path="/Login" />
        <About path="/About" />
      </Router>
    </div>
  );
}

export default App;
