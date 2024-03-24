import "./LikeButton.css"

interface LikeButtonProps {
    likePost: () => Promise<void>

}

function LikeButton(props: LikeButtonProps) {
    const { likePost } = props

    return (
        <button className="like-button" onClick={likePost}>
        </button>
    )
}

export default LikeButton