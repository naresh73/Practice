import './App.css';
import { useEffect, useState } from 'react'
// import UserForm from './userForm';
// import User from './User';
// import UserInput from './UserInput';
// import UserProps from './UserProps';

function App() {
  const [st, setSt] = useState(0)

  function OnBtn() {
    setSt(st + 10);
  }

  useEffect(() => {
    console.log("1")
  },[st]);
  return (
    <div className="App">
      {st}
      <button onClick={OnBtn}>BTN</button>
      {/* <User /> */}
      {/* <UserProps name="Naresh" /> */}
      {/* <UserInput /> */}
      {/* <UserForm /> */}
    </div>
  );
}

export default App;