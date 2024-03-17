import { ActionFunctionArgs, redirect} from "react-router-dom";

async function action(args: ActionFunctionArgs) {
    const formData = await args.request.formData()
    const values = Object.fromEntries(formData)
    console.log(data);
    return redirect("/auth/login")
}

export default {
    action
}