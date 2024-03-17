import { useActionData } from "react-router-dom";
import Forms from "../../../forms";
import "./Timeline.css"
import { ActionData, CreatePost } from "../../../types";

function Timeline() {
    const errors = useActionData() as ActionData<CreatePost>

    return (
        <div className="timeline">
            <header className="timeline-header">
                <h1>Posts 🍽</h1>
            </header>
            <Forms.PostForm 
                action={"/posts"}
                errors={errors}
            />
        </div>
    )
}

export default Timeline