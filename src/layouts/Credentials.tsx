import { Outlet } from "react-router-dom";
import "./Credentials.css"

function Credentials() {
    return (
        <div className="credentials">
            <Outlet/>
        </div>
    )
}

export default Credentials