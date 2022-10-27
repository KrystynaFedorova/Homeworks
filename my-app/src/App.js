import './App.css';
import { Outlet } from "react-router-dom";
import {useNavigate} from "react-router-dom"

const App=()=>{
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.setItem('logged-in', false);
    navigate("/sign-in");
  }
  return (
      <div className="App">
        <header><button onClick={logout}>Logout</button></header>

        <Outlet/>
      </div>
  )
}
export default App;
