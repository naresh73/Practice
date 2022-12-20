import './App.css';
import { connect } from 'react-redux';
import { incCount, decCount, resCount } from './redux/action';
import Navbar from './navbar';


function App({ states, mapFunction}) {
  return (
    <div className="App">
      <Navbar />
      Hello {states.name}
      <div>
        <button>{states.count}</button>
      </div>
      <div>
        <button onClick={() => mapFunction.incFunction()}>INC</button>
        <button onClick={() => mapFunction.decFunction()}>DEC</button>
        <button onClick={() => mapFunction.resFunction()}>RESET</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    states: {
      count: state.count,
      name: state.name
    }
  }
}

const mapDispatchToProps = dsipatch => {
  return {
    mapFunction : {
    decFunction : (count)=> dsipatch(decCount(count)),
    incFunction : (count)=> dsipatch(incCount(count)),
    resFunction : (count)=> dsipatch(resCount(count))
    }
      
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);  
