import { ActionFunctionArgs} from "react-router-dom";
import { fetchFromApi } from "../api";
import { Credentials, ApiResponse } from "../types";

interface Token extends ApiResponse {
    access: string
}

async function action(args: ActionFunctionArgs) {
    const formData = await args.request.formData()
    const values = Object.fromEntries(formData)
    const data = await fetchFromApi<Credentials, Token>({ 
        values, 
        endpoint: "login", 
        method: "POST"
    })    
    return data 
}

export default {
    action
}
