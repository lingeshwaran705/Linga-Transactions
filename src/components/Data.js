import svg1 from "../img/svg-1.svg";
import svg2 from "../img/svg-2.svg";
import svg3 from "../img/svg-3.svg";
import svg4 from "../img/svg-4.svg";
import svg5 from "../img/svg-5.svg";
import svg6 from "../img/svg-6.svg";
import svg7 from "../img/svg-7.svg";
import svg8 from "../img/svg-8.svg";
import { FaFire } from "react-icons/fa";
import { BsFillXDiamondFill } from "react-icons/bs";
import { BsSuitDiamond } from "react-icons/bs";

export const transaction = {
  title: "EXCLUSIVE ACCESS",
  heading: "Unlimited Transactions with zero fees",
  svg: svg1,
  btn: "Get Started",
  alternate: false,
  theme: "dark",
  para: "Get access to our exclusive diamond card that allows you to send unlimited transaction without getting charged any fees",
};

export const signup = {
  title: "SIGN UP TODAY",
  heading: "Join today to receive an exclusive offer",
  svg: svg2,
  btn: "Sign Up",
  themd: "white",
  alternate: false,
  para: " Get access to our exclusive diamond card that allows you to send ultimated transactions without getting charging any fees ",
};

export const products = {
  title: "VIEW OUR PRODUCTS",
  heading: "Shop through our catalog of products",
  svg: svg4,
  btn: "Shop Now",
  theme: "white",
  alternate: false,
  para: "We provide world wide shipping to all countries. If there are any issues, just issue a refund and we will process your request",
};

export const setUp = {
  title: "EASY SETUP",
  heading: "Super fast and simple onboarding process",
  svg: svg7,
  btn: "Shop Now",
  alternate: true,
  theme: "white",
  para: "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go",
};

export const security = {
  title: "100% SECURE",
  heading: "Stay protected 24/7 anywhere anytime",
  svg: svg5,
  btn: "Learn More",
  alternate: false,
  theme: "dark",
  para: "We have you covered no matter where you are located. Over 140 locations worldwide to ensure you have access anytime",
};

export const dataActivity = {
  title: "DATA ACTIVITY",
  heading: "Every transaction is stored on our secure cloud database",
  svg: svg8,
  btn: "Sign Up Now",
  alternate: true,
  theme: "dark",
  para: "Never ever have to worry again about saved reciepts. We store your data. Do you can access it anytime",
};

// pricing

const fire = <FaFire />;
const box = <BsFillXDiamondFill />;
const diamond = <BsSuitDiamond />;

export const price1 = {
  logo: fire,
  name: "Starter",
  price: "$8.99",
  duration: "per month",
  transactions: "100 Transactions",
  cback: "2% Cash Back",
  limit: "$10,000 Limit",
  theme: "blue",
};

export const price2 = {
  logo: box,
  name: "Gold",
  price: "$29.99",
  duration: "per month",
  transactions: "1000 Transactions",
  cback: "15% Cash Back",
  limit: "$1,00,000 Limit",
  theme: "black",
};

export const price3 = {
  logo: diamond,
  name: "Diamond",
  price: "$99.99",
  duration: "per month",
  transactions: "Unlimited Transaction",
  cback: "5% Cash Back",
  limit: "Unlimited Spending",
  theme: "blue",
};
