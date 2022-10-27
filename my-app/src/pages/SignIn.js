import {useNavigate} from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate()
    const setLoginFlag = () => {
        localStorage.setItem('loggen-in', true)
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