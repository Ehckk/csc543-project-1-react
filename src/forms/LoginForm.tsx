import { Form, Link, useActionData } from "react-router-dom";
import { ActionData, Credentials } from "../types";
import Components from "../components";
import "./Forms.css"

function LoginForm() {
    const errors = useActionData() as ActionData<Credentials>

    let formMsg = ""
    if (errors) {
        if ("message" in errors) {
            formMsg = errors["message"]
        }
    }
    return (
        <Form 
            name={"login"} 
            method={"post"} 
            id={"login-form"} 
            className={"credentials-form"}
        >
            <h1 className="form-title">Log In</h1>
            <p className="form-message">{formMsg}</p>
            <div className="form-body">
                <Components.Input
                    type={"type"}
                    name={"username"}
                    label={"Username"}
                    errors={errors}
                />
                <Components.Input
                    type={"password"}
                    name={"password"}
                    label={"Password"}
                    errors={errors}
                />
            </div>
            <div className="form-buttons">
                <Components.Button
                    type={"submit"}
                    text={"Log In"}
                    size={"large"}
                />
            </div>
            <p>Don't have an account? <Link to={"/auth/register"}>Create one</Link></p>
        </Form>
    )
}

export default LoginForm