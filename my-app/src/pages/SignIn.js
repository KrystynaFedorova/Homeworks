import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux"
import {logUserIn} from '../store/features/users/usersSlice'

const SignIn = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const setLoginFlag = () => {
        dispatch(logUserIn())
        navigate("/browse");
    }
    return (
        <div className="SignIn">
            SignIn
            <button onClick={setLoginFlag}>Log In</button>
        </div>
    )

}
export default SignIn;