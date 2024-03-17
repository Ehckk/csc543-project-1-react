import { Form, Link } from "react-router-dom";
import Components from "../components";

function LoginForm() {
    return (
        <Form method="post" action="/login" id="login-form">
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
                <button type="submit">
                    Log In
                </button>
            </div>
            <p>Don't have an account? <Link to={"/register"}>Create one</Link></p>
        </Form>
    )
}

export default LoginForm