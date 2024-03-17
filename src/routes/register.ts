import { ActionFunctionArgs, redirect } from "react-router-dom";
import { fetchFromApi } from "../api";
import { Token, Registration } from "../types";

async function action(args: ActionFunctionArgs) {
    const formData = await args.request.formData()
    const values = Object.fromEntries(formData)
    const { ok: created, data } = await fetchFromApi<Registration, Token>({ 
        values, 
        endpoint: "register", 
        method: "POST"
    })
    if (!created) {
        return data
    }
    const { access } = data
    localStorage.setItem("access", access)
    return redirect("/")
}

export default {
    action
}