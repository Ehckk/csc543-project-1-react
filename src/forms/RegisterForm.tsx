import { Form, Link } from "react-router-dom"
import Components from "../components"
import "./Forms.css"

function RegisterForm() {
    return (
        <Form 
            name="register"
            method="post"
            id="register-form"
            className="credentials-form"
        >
            <h1 className="form-title">Sign Up</h1>
            <div className="form-body">
                <Components.Input
                    type={"text"}
                    name={"username"}
                    label={"Username"}
                />
                <Components.Input
                    type={"text"}
                    name={"display_name"}
                    label={"display-name"}
                    placeholder={"Name"}
                />
                <Components.Input
                    type={"password"}
                    name={"password"}
                    label={"Password"}
                />
                <Components.Input
                    type={"password"}
                    name={"confirm"}
                    label={"Confirm Password"}
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