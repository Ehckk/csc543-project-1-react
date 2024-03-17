import { useNavigate } from "react-router-dom"
import Components from ".."
import "./Navbar.css"

// const links = {
//     Posts: "/",
// } as const

function Navbar() {
    const navigate = useNavigate()

    return (
        <div className="header-top">
            <h2 className="header-title">My Awesome Social Media App</h2>
            <Components.Button
                type={"button"}
                text={"Log Out"} 
                size={"small"}
                click={() => navigate("/logout")}
            />
        </div>
        )
}

export default Navbar