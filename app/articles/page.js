import React from "react";
import FetchProducts from "../component/FetchProducts";

export const metadata = {
  title: "articles page",
};

const page = () => {
  return (
    <>
      <div>my Articles</div>
      <FetchProducts />
    </>
  );
};

export default page;
