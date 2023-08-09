import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "./userContext"

export const Header = () => {
    const { userInfo, setUserInfo } = useContext(UserContext)
    const name = userInfo
    const logout = () => {
        setUserInfo(null)
    }
    return (
        <div className="header">
            {name && (
                <div className="header-user">
                    <h3>{name.name}</h3>
                    <button className="btn-2" onClick={logout}>Logout</button>
                </div>
            )}
            {!name && (
                <div className="header-user">
                    <Link to="/login" className="btn-2">Login</Link>
                    <Link to="/register" className="btn-2">Register</Link>
                </div>
            )}
        </div>
    )
}