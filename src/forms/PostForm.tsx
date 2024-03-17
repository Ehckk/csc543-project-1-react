import { Form } from "react-router-dom";
import Components from "../components";
import { ActionData, CreatePost } from "../types";

interface PostFormProps {
    action?: string
    errors?: ActionData<CreatePost>
}

function PostForm(props: PostFormProps) {
    const { action, errors } = props
    
    let fieldMsg
    if (errors) {
        if ("content" in errors) {
            fieldMsg = errors.content
        }
    }
    console.log(fieldMsg);
    

    return (
        <Form 
            name={"post"}
            method={"post"}
            id={"post-form"}
            className={"post-form"}
            action={action}
        >
            <div className="form-body">
                <textarea
                    id="post-content" 
                    className="create-post"
                    name="content"
                    aria-label="content"
                    placeholder="What's cooking...?"
                />
            </div>
            <div className="form-buttons">
                <p className="form-error">{fieldMsg}</p>
                <Components.Button
                    type={"submit"}
                    text={"Cook"}
                    size={"large"}
                />
            </div>
        </Form>
    )
}

export default PostForm