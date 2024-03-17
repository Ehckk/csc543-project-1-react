import { Form, Link } from "react-router-dom";
import Components from "../components";
import "./Forms.css"

function LoginForm() {
    return (
        <Form 
            name="login" 
            method="post" 
            action="/login" 
            id="login-form" 
            className="credentials-form"
        >
            <h1 className="form-title">Log In</h1>
            <div className="form-body">
                <Components.Input
                    type={"type"}
                    name={"username"}
                    label={"Username"}
                />
                <Components.Input
                    type={"password"}
                    name={"password"}
                    label={"Password"}
                />
            </div>
            <div className="form-buttons">
                <Components.Button
                    type={"submit"}
                    text={"Log In"}
                    size={"large"}
                />
            </div>
            <p>Don't have an account? <Link to={"/register"}>Create one</Link></p>
        </Form>
    )
}

export default LoginForm