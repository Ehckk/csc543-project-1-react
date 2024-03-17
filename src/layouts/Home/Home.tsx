import { Outlet } from "react-router-dom";
import Components from "../../components";
import "./Home.css"


function Home() {
    return (
        <div className="home">
            <Components.Navbar/>
            {/* <!-- Sidebar Probably --> */}
            <main className="content">
                <Outlet/>
            </main>
        </div>
    )
}

export default Home
