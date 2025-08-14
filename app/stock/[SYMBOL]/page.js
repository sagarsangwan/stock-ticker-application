import React from "react";

async function page({ params }) {
  const { SYMBOL } = await params;
  console.log(params);
  return <div>{SYMBOL}</div>;
}

export default page;
