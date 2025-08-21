"use client"

type props = {
    error: Error
}
export default function ErrorBoundary({error} : props) {
    return(
        <h1>Error {error.message}</h1>
    )
}