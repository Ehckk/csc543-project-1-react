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
    confirm?: string
    display_name?: string
} 

interface PostPartial {
    post_id: number
    reply_id: number | null
    content: string
    created: string
    author_id: number 
    author: User
    likes: { user_id: number }[]
    reply_count: number
}

interface Post extends PostPartial {
    replies: PostPartial[]
}

interface CreatePost {
    content?: string
}

export type {
    User,
    Registration,
    Credentials,
    Post,
    PostPartial,
    CreatePost
}