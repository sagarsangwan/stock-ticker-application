import MyFAvorites from "@/components/my-favorites";
import React from "react";

async function page() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delay

  return (
    <div>
      <MyFAvorites />
    </div>
  );
}

export default page;
