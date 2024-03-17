import { ApiResponse } from "./types"

const BASE_API_URL = "http://localhost:7000/api"

interface ApiArgs<Req> {
    values?: Req
    endpoint: string
    method: "GET" | "POST"
    token?: boolean
}

export async function fetchFromApi<Req=null, Res extends ApiResponse=ApiResponse>(args: ApiArgs<Req>) {
    const { values, endpoint, method, token } = args
    console.log(values)
    const url = [BASE_API_URL, endpoint].join("/")
    const headers: HeadersInit = {
        "Content-Type": "application/json"
    }
    if (token) {
        const token = localStorage.getItem("access")
        headers["Authorization"] = `Bearer ${token}`
    }
    const params: RequestInit = {
        headers,
        method
    }
    if (method !== "GET") {
        params.body = JSON.stringify(values ?? {})
    }
    const res = await fetch(url, params)
    const data = await res.json() as Res
    return {ok: res.ok, data}
}
