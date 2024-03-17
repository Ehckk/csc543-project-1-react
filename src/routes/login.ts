import { ActionFunctionArgs, redirect } from "react-router-dom";
import { fetchFromApi } from "../api";
import { Credentials, ApiResponse } from "../types";

interface Token extends ApiResponse {
    access: string
}

async function action(args: ActionFunctionArgs) {
    const formData = await args.request.formData()
    const values = Object.fromEntries(formData)
    const { ok, data } = await fetchFromApi<Credentials, Token>({ 
        values, 
        endpoint: "login", 
        method: "POST"
    })
    console.log(ok);
    
    if (!ok) {
        return data
    }
    const { access } = data
    console.log(access);
    localStorage.setItem("access", access)
    console.log(localStorage.getItem("access"));
    return redirect("/")
}

async function loader() {
    const token = localStorage.getItem("access")
    if (token) {
        return redirect("/")
    }
    return null
}

export default {
    action,
    loader
}
