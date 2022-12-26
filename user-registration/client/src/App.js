import LoginForm from "./loginForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginForm/>} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/home" element={
          <h1>
          Hello
        </h1>
        } />
      </Routes>
    </BrowserRouter>
  )
}
