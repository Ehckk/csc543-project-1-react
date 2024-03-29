import { ActionFunctionArgs, redirect } from "react-router-dom";
import { fetchFromApi } from "../../api";
import Timeline from "./Timeline/Timeline";
import { CreatePost, PostPartial } from "../../types";

async function action(args: ActionFunctionArgs) {
    console.log(args);
    
    const formData = await args.request.formData()
    const values = Object.fromEntries(formData)
    const { ok, data } = await fetchFromApi<CreatePost>({ 
        values, 
        endpoint: "posts/new", 
        method: "POST",
        token: true
    })
    if (!ok) {
        return data
    }
    return redirect("/")
}

async function loader() {
    const token = localStorage.getItem("access")
    if (!token) {
        return redirect("/auth/login")
    }
    const {data} = await fetchFromApi<PostPartial[]>({
        endpoint: "posts",
        method: "GET",
        token: true
    })
    return data
}

export default {
    action,
    loader,
    Timeline
}