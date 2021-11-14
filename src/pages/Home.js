import React from "react";
import { transaction, setUp, security, dataActivity } from "../components/Data";
import Card from "../components/Card";
import Pricing from "./Pricing";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Card {...transaction} />
      <Card {...setUp} />
      <Card {...security} />
      <Pricing />
      <Card {...dataActivity} />
      <Footer />
    </div>
  );
}

export default Home;
