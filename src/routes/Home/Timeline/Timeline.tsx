import { useActionData, useLoaderData } from "react-router-dom";
import Components from "../../../components";
import Forms from "../../../forms";
import { ActionData, CreatePost, PostPartial } from "../../../types";
import "./Timeline.css"

function Timeline() {
    const posts = useLoaderData() as PostPartial[]
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
            {posts.map((post) => {
                const {post_id} = post
                return (
                    <Components.Post 
                        key={post_id}
                        post={post}
                    />
                )
            })}
        </div>
    )
}

export default Timeline