import { redirect } from "react-router-dom"

async function loader() {
    localStorage.removeItem("access")
    return redirect("/auth/login")
}

export default {
    loader
}