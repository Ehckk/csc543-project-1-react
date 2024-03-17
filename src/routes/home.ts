import { redirect } from "react-router-dom";
import { fetchFromApi } from "../api";

async function loader() {
    const token = localStorage.getItem("access")
    if (!token) {
        return redirect("/auth/login")
    }
    const posts = await fetchFromApi({
        endpoint: "posts",
        method: "GET" 
    })
    return posts
}

export default {
    loader
}