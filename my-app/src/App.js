import './App.css';
import {Outlet, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux"
import {logUserOut} from "./store/features/users/usersSlice";

const App = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch
    const logout = () => {
        dispatch(logUserOut())
        navigate("/sign-in");
    }
    return (
        <div className="App">
            <header>
                <button onClick={logout}>Logout</button>
            </header>
            <Outlet/>
        </div>
    )
}
export default App;
