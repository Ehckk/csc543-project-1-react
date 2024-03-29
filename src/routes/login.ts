import { ActionFunctionArgs, redirect } from "react-router-dom";
import { fetchFromApi } from "../api";
import { Credentials, Token } from "../types";

async function action(args: ActionFunctionArgs) {
    const formData = await args.request.formData()
    const values = Object.fromEntries(formData)
    const { ok, data } = await fetchFromApi<Credentials, Token>({ 
        values, 
        endpoint: "login", 
        method: "POST"
    })
    if (!ok) {
        return data
    }
    const { access } = data
    localStorage.setItem("access", access)
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
