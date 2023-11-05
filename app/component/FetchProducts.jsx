"use client";
import { useEffect, useState } from "react";
export default function FetchProducts() {
  const [myData, setMyData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products/1");
        const products = await res.json();
        setMyData(products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div>fetchProducts</div>
      <div>{myData.title}</div>
    </div>
  );
}

