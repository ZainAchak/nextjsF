export default async function ProductReviews({params} : {params : Promise<{productid : string}>}) {
    const productId = (await params).productid
    return(
        <div>
            <h1>This the reviews of Product {productId}</h1>
        </div>
    )
}