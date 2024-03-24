import { useEffect, useState } from "react"
import { fetchFromApi } from "../../api"
import { PostResponse, PostPartial, PostId } from "../../types"
import utils from "../../utils"
import LikeButton from "../LikeButton"
import "./Post.css"

interface PostProps {
    post: PostPartial
}


function Post(props: PostProps) {
    const { post: initial } = props
    const [post, setPost] = useState<PostPartial>(initial)
    const [liked, setLiked] = useState<boolean>(initial.has_liked)

    useEffect(() => {
        setLiked(post.has_liked)
    }, [post.has_liked])

    async function likePost() {
        const args = { token: true, values: { post_id: post.post_id } }
        let key: string
        let method: "POST" | "DELETE"
        if (!liked) {
            key = "add"
            method = "POST"
        } else {
            key = "remove"
            method = "DELETE"
        } 
        console.log(liked, key, method); 
        const { data } = await fetchFromApi<PostId, PostResponse>({ endpoint: `likes/${key}`, method, ...args })
        setPost(data)
    }
    console.log(liked);
    

    return (
        <div className="post">
            <span className="post-author">{post.author?.display_name}</span>
            <p className="post-content">{post.content}</p>
            <div className="post-engagement">
                <div className="likes">
                    <LikeButton liked={liked} likePost={likePost}/>
                    <span className="like-count">{post.likes.length}</span> 
                </div>
                <p>{utils.date.createdDate(post.created)}</p>
            </div>
        </div>
    )
}

export default Post