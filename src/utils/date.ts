function createdDate(created: string) {
    const date = new Date(created)
    const dateStr = date.toLocaleDateString()
    const timeStr = date.toLocaleTimeString([], { hour: "2-digit", hour12: true, minute: "2-digit" })
    return `${dateStr} ${timeStr}`
}

export default {
    createdDate
}