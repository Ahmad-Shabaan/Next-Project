import React from "react";
import Link from "next/link";
import Image from "next/image";
export const metadata = {
  title: "posts page",
};

const page = async () => {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: {
      revalidate: 120,
    },
  });
  const products = await res.json();

  const allProducts = products.map((product) => {
    return (
      <Link
        href={`/posts/${product.id}`}
        key={product.id}
        className="app__popular-products_product padding__product"
      >
        <div>
          {/* <img src={product.image} alt="popular" /> */}
          <Image
            src={product.image}
            alt="Image description"
            width={400}
            height={400}
          />
          <span>
            <i className="fa-regular fa-heart"></i>
          </span>
        </div>
        <h3 className="app__product-name">
          <span>{product.title}</span>
        </h3>
        <span className="app__product-price">$ {product.price}</span>
      </Link>
    );
  });

  return (
    <div className="app__container">
      <div className="app__popular app__padding">
        <div className="w-100">
          <div className="app__popular-info">
            <h2 className="app__h2">Popular Items</h2>
            <p>
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
              gravida.
            </p>
          </div>
        </div>
        <div className="app__popular-products">{allProducts}</div>
        <button className="custom__button mt-70">view more products</button>
      </div>
    </div>
  );
};

export default page;
