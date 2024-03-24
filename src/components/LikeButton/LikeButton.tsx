import "./LikeButton.css"

interface LikeButtonProps {
    liked: boolean
    likePost: () => Promise<void>

}

function LikeButton(props: LikeButtonProps) {
    const { liked, likePost } = props

    const classList = ["like-button"]
    if (liked) {
        classList.push("liked")
    }

    return (
        <button className={classList.join(" ")} onClick={likePost}/>
    )
}

export default LikeButton