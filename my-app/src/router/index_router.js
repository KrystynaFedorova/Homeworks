import {createBrouserRouter, Navigate, useRouteError} from "react-router-dom"
import App from '../App'
import Browse from "../pages/Browse"
import SignIn from "../pages/SignIn"
import Title from "../pages/Title"

const RequireAuth = ({children, redirectTo}) => {
    let isAuthenticated = JSON.parse(localStorage.getItem('logged-in'))
    return isAuthenticated ? children : <Navigate to={redirectTo}/>

}


function ErrorBoundary() {
    let error = useRouteError();
    console.error(error)
    return <h1> Error:404. </h1>
}

const router = createBrouserRouter([{
    path: "/",
    element: <RequireAuth children={<App/>} redirectTo="/sign-in"/>,
    errorElement: <ErrorBoundary/>,
    children: [
        {
            path: "browse",
            element: <Browse/>
        },
        {
            path: "title",
            children: [{path: "id", element: <Title/>}]
        },
    ]
},
    {
        path: 'sign-in',
        element: <SignIn/>
    }
])


export default router;