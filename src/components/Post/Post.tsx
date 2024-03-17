import { PostPartial } from "../../types"
import "./Post.css"

interface PostProps {
    post: PostPartial
}

function Post(props: PostProps) {
    const { post } = props
    const { author, content, created, likes, reply_count } = post
    const { display_name } = author

    const date = new Date(created)
    const dateStr = date.toLocaleDateString()
    const timeStr = date.toLocaleTimeString([], { hour: "2-digit", hour12: true, minute: "2-digit" })
    const fmtDate = `${dateStr} ${timeStr}`

    return (
        <div className="post">
            <span className="post-author">
                {display_name}
            </span>
            <p className="post-content">
                {content}
                </p>
            <div className="post-engagement">
                <div className="post-interacts">
                    <div className="likes">
                        <img 
                            src="heart.svg" 
                            alt="heart"
                            height={16}
                            width={16}
                        />
                        <span className="like-count">
                            {likes.length}
                        </span> 
                    </div>
                    <div className="replies">
                        <img 
                            src="comment.svg" 
                            alt="comment"
                            height={16}
                            width={16}
                        />
                        <span className="reply-count">
                            {reply_count}
                        </span>
                    </div>
                </div>
                <p>{fmtDate}</p>
            </div>
        </div>
    )
}

export default Post