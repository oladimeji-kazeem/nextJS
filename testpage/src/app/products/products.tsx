// app/products/[slug]/page.js

// This is a Server Component, so you can fetch data directly here.
type Product = { name: string; price: number };
type Products = { [key: string]: Product };

async function getProduct(slug: keyof Products): Promise<Product | undefined> {
  // In a real application, you would fetch data from a database or API
  const products: Products = {
    't-shirt-101': { name: 'Awesome T-Shirt', price: 25 },
    'hat-202': { name: 'Cool Hat', price: 15 },
  };
  return products[slug];
}

export default async function ProductDetailsPage({ params }: { params: { slug: keyof Products } }) {
  const product = await getProduct(params.slug);

  return (
    <div>
      {product ? (
        <>
          <h1>{product.name}</h1>
          <p>Price: ${product.price}</p>
        </>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
}