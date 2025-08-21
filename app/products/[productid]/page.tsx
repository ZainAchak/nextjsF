export default async function ProductDetails({params}: {params: Promise<{ productid: string }>}) {
  const { productid } = await params; // ✅ await the whole params object

  return (
    <div>
      <h1>Product Details for Product ID: {productid}</h1>
    </div>
  );
}
