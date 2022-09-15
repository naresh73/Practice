import './App.css';
import { connect } from "react-redux";
import { incrementCount, decrementCount, resetCount } from "./redux/actions";

function App({ Name, count, increseFunction, decreseFunction, resetFunction }) {
  return (
    <div className='container'>
      <h1>hello</h1>
      <div className="container">
        <button>{Name}</button>
      </div>

      <div className="container">
        <button>{count}</button>
      </div>
        <button onClick={() => increseFunction()}>INC</button>
        <button onClick={() => decreseFunction()}>DEC</button>
        <button onClick={() => resetFunction()}>RESET</button>
      
    </div>
  );
}

const mapStateToProps = state => {
  return {
    Name: state.Name,
    count: state.count
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    increseFunction: (count) => dispatch(incrementCount(count)),
    decreseFunction: (count) => dispatch(decrementCount(count)),
    resetFunction: (count) => dispatch(resetCount(count))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
