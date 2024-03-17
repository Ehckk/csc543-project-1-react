import { ApiResponse } from "./types"

const BASE_API_URL = "http://localhost:7000/api"

interface ApiArgs<Req> {
    values?: Req
    endpoint: string
    method: "GET" | "POST"
}

export async function fetchFromApi<Req=null, Res extends ApiResponse=ApiResponse>(args: ApiArgs<Req>) {
    const { values, endpoint, method } = args
    console.log(values)
    const url = [BASE_API_URL, endpoint].join("/")
    const params: RequestInit = {
        headers: {
            "Content-Type": "application/json"
        },
        method
    }
    if (method !== "GET") {
        params.body = JSON.stringify(values ?? {})
    }
    const res = await fetch(url, params)
    const data = await res.json() as Res
    return {ok: res.ok, data}
}
