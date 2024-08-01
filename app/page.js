import React from "react";
import Link from "next/link";
import Navigation from "./_components/Navigation";
function Page() {
  return (
    <div>
      <h1>Hello World</h1>
      <Link href="/cabins">Explore Luxury</Link>
    </div>
  );
}

export default Page;
