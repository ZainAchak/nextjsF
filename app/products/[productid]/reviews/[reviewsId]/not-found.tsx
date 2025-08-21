"use client"
import { usePathname } from "next/navigation"

export default function Pagenotfound() {
    const pathname = usePathname()
    const productId = pathname.split("/")[2]
    const reviewId = pathname.split("/")[4]
    return(
        <div>
            <h1>Review not found</h1>
            <h3>Could not find review for productId {productId} the requested review {reviewId}</h3>
        </div>
    )
}