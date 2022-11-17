import './App.css';
import Card from './card';
import Data from './data';

function App() {
  return (
    <div className="App">
     <Card cardData = {Data()} />
    </div>
  );
}

export default App;
