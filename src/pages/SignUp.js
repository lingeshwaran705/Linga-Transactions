import React from "react";
import Card from "../components/Card";
import { signup } from "../components/Data";

function SignUp() {
  return (
    <>
      <Card {...signup} />
    </>
  );
}

export default SignUp;
