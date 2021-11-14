import React from "react";
import Card from "../components/Card";
import { products } from "../components/Data";
function Products() {
  return (
    <>
      <Card {...products} />
    </>
  );
}

export default Products;
