import React from 'react';
import './App.css';
import Nav from './components/navbar';

function App() {
  return (
    <div className="App">
      <Nav title="PROPS" subtitle="using props" description="“Props” is a special keyword in React,
      which stands for properties and is being used for passing data from one component to another.
      But the important part here is that data with props are being passed in a uni-directional flow.
      ( one way from parent to child" />
    </div>
  );
}

export default App;
