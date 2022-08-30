

import "bootstrap/dist/css/bootstrap.min.css";
import { legacy_createStore } from "redux";
import './App.css';
import { rootReducer } from "./redux";

const store = legacy_createStore(rootReducer);


function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
