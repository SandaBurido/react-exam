
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Main from "./pages/main";

function App() {
  const location = useLocation();

  return (
    <div className="App">
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
          Learn React
        </a>
      </header> */}
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Main/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
