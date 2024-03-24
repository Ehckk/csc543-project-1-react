import { Post } from "./Api"

interface ApiResponse {
    message: string
}

interface Token extends ApiResponse {
    access: string
}

type FormErrors<Data> = {
    [key in keyof Data]: string
}

type ActionData<Data> = FormErrors<Data> | ApiResponse | undefined

interface PostResponse extends Post, ApiResponse {}

export type {
    ApiResponse,
    PostResponse,
    FormErrors,
    ActionData,
    Token
}
