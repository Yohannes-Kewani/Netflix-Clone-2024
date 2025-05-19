
import { HashRouter as Router } from "react-router-dom";

import './App.css';
import Home from '../src/Pages/Home/Home'
function App() {
  return (
    <router>
      <div className="App">
        <Home />
      </div>
    </router>
  );
}

export default App;
