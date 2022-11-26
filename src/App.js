import NavBar from "./NavBar.js"
import Main from "./Main.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Build Pathfinder
          
        </a>
      </header> */}
    </div>
  );
}

export default App;
