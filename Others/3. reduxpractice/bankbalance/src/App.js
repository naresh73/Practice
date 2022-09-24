import Buttons from "./components/home page";
import NavBar from "./components/navbar";
import { connect } from 'react-redux';

function App({
  balance
}) {
  return (
    <div className="App">
      
      <NavBar />
      <Buttons />
    
    </div>  
  );
}


const stateToProps = state => {
  return {
      balance : state.balance
  };
}

export default connect(stateToProps)(App);
