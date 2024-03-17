import login from "./login"
import logout from "./logout"
import home from "./Home"
import register from "./register"
import { LoaderFunctionArgs, redirect } from "react-router-dom"

const BASE_URL = "http://localhost:5173"

function loader(args: LoaderFunctionArgs) {
    const url = args.request.url
    const path = url.substring(BASE_URL.length)
    console.log(path);
    if (path === "/") {
        return redirect("/posts")
    }
    return null
}

export default {
    login,
    logout,
    register,
    home,
    loader
}