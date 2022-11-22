import { connect } from 'react-redux';
import { incrementCounter, decrementCounter, resetCounter } from './Redux/Actions';

function App({
  states,
  action
}) {

  return (
    <div className='container'><center>
      <h3>
        {/* {states.username} */}
        fgg
      </h3>
      <h3>
        {/* {states.email} */}
        gg
      </h3>
      <h1>
        {states.counter}
      </h1>
      <div><button onClick={action.increseFunction}>+</button></div>
      <div><button onClick={action.decreseFunction}>-</button></div>
      <br/>
      <br/>
      <div><button onClick={action.resetFunction}>=</button></div>
    </center>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    states: {
      counter: state.counter
      // username: state.username,
      // email: state.email
    }
  };
};

const mapFunctionToProps = (dispatch) => {
  return {
    action: {
      increseFunction: (counter) => dispatch(incrementCounter(counter)),
      decreseFunction: (counter) => dispatch(decrementCounter(counter)),
      resetFunction: (counter) => dispatch(resetCounter(counter))
    }
  };
};

export default connect(mapStateToProps , mapFunctionToProps)(App);