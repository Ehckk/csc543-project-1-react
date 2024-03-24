interface UserId {
    user_id: number
}

interface PostId {
    post_id: number
}

interface User {
    user_id: number
    username: string
    display_name: string
}

interface Credentials {
    username?: string
    password?: string
}

interface Registration extends Credentials {
    confirm: string
    display_name: string
} 

interface PostPartial {
    post_id: number
    reply_id: number | null
    content: string
    created: string
    author: User | null
    author_id: number 
    likes: { user_id: number }[]
    reply_count: number
    has_liked: boolean
}

interface Post extends PostPartial {
    replies: PostPartial[]
}

interface CreatePost {
    content: string
}

interface LikePartial {
    user_id: number,
    post_id: number
}

interface Like {
    user: User
    post: PostPartial
}

export type {
    UserId,
    User,
    Registration,
    Credentials,
    PostPartial,
    Post,
    PostId,
    CreatePost,
    LikePartial,
    Like
}