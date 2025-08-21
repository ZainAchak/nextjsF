import { notFound } from "next/navigation";

export default async function Productreview({params} : {params : Promise<{reviewsId : string; productid:string}>}) {
    const reviewsId = (await params).reviewsId 
    const productId = (await params).productid

    if(parseInt(reviewsId)> 1000){
        notFound()
    }

    if(parseInt(reviewsId)===10){
        throw new Error("Error in the review 10")
    }
    return(
        <div>
            <h1>Product {productId} Review Id {reviewsId}</h1>
        </div>
    )
}