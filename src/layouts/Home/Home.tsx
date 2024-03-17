import { Link } from "react-router-dom";


function Home() {
    return (
        <Link to={"/logout"}>
            Logout
        </Link>
    )
}

export default Home
