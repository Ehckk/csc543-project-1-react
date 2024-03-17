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

export type {
    ApiResponse,
    FormErrors,
    ActionData,
    Token
}
