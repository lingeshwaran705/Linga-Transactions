import React from "react";
import { price1, price2, price3 } from "../components/Data";
import PricingCard from "./PricingCard";

function Pricing() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-16 px-6 pb-32 pt-8">
      <h1 className="text-3xl font-bold text-gray-800 ">Pricing</h1>
      <PricingCard {...price1} />
      <PricingCard {...price2} />
      <PricingCard {...price3} />
    </div>
  );
}

export default Pricing;
