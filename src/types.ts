interface User {
    user_id: number
    username: string
    display_name: string
}

interface Credentials {
    username?: string
    password?: string
}

interface ApiResponse {
    message: string
}

interface Registration extends Credentials {
    confirm: string
    display_name: string
} 

interface CreatePost {
    author_id: string
    content: string
}

interface Post {
    post_id: number
    author: User
    content: string
    created: string
    likes: number
    user_has_liked: boolean
}

interface PostWithReplies extends Post {
    replies: Post[]
}

type FormErrors<Data> = {
    [key in keyof Data]: string
}

type ActionData<Data> = FormErrors<Data> | ApiResponse | undefined

export type {
    User,
    Registration,
    Credentials,
    Post,
    PostWithReplies,
    CreatePost,
    ApiResponse,
    FormErrors,
    ActionData
}
