import { Form, Link, useActionData } from "react-router-dom"
import Components from "../components"
import "./Forms.css"
import { ActionData, Registration } from "../types"

function RegisterForm() {
    const errors = useActionData() as ActionData<Registration>

    let formMsg = ""
    if (errors) {
        if ("message" in errors) {
            formMsg = errors["message"]
        }
    }
    return (
        <Form 
            name="register"
            method="post"
            id="register-form"
            className="credentials-form"
        >
            <h1 className="form-title">Sign Up</h1>
            <p className="form-message">{formMsg}</p>
            <div className="form-body">
                <Components.Input
                    type={"text"}
                    name={"username"}
                    label={"Username"}
                    errors={errors}
                />
                <Components.Input
                    type={"text"}
                    name={"display_name"}
                    label={"display-name"}
                    placeholder={"Name"}
                    errors={errors}
                />
                <Components.Input
                    type={"password"}
                    name={"password"}
                    label={"Password"}
                    errors={errors}
                />
                <Components.Input
                    type={"password"}
                    name={"confirm"}
                    label={"Confirm Password"}
                    errors={errors}
                />
            </div>
            <div className="form-buttons">
                <Components.Button
                    type={"submit"}
                    text={"Sign Up"}
                    size={"large"}
                />
            </div>
            <p>Don't have an account? <Link to={"/auth/login"}>Sign In</Link></p>   
        </Form>
    )
}

export default RegisterForm