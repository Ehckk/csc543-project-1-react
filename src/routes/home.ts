import { ActionFunctionArgs, redirect } from "react-router-dom";
import { fetchFromApi } from "../api";

async function action(args: ActionFunctionArgs) {
    console.log({ args });
    return
}


async function loader() {
    const token = localStorage.getItem("access")
    if (!token) {
        return redirect("/auth/login")
    }
    const posts = await fetchFromApi({
        endpoint: "posts",
        method: "GET",
        token: true
    })
    return posts
}

export default {
    action,
    loader
}