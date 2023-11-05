export default async function myPost({ params }) {
  const res = await fetch(
    `https://fakestoreapi.com/products/${params.productId}`
  );
  const product = await res.json();
  return (
    <div>
      <img src={product.image} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </div>
  );
}
