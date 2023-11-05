import React from "react";
import Link from "next/link";
export const metadata = {
  title: "posts page",
};

const page = async () => {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: 120,
  });
  const products = await res.json();

  const allProducts = products.map((product) => {
    return (
      <Link href={`/posts/${product.id}`}
      key={product.id}
      
      >
        <div
          style={{
            width: "300px",
            backgroundColor: "#1c2939",
            borderRadius: "10px",
            color: "white",
          }}
        >
          <img
            src={product.image}
            alt="product"
            style={{ width: "100%", height: "300px" }}
          />
          <div style={{ width: "100%", padding: "6px" }}>
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <p>{product.category}</p>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div>
      <div>my products</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          columnGap: "10px",
          rowGap: "40px",
        }}
      >
        {allProducts}
      </div>
    </div>
  );
};

export default page;
