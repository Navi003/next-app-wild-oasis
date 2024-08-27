import React from "react";
import { auth } from "../_lib/auth";

export const metadata = {
  title: "Account",
};

export default async function Page() {
  const session = await auth();

  return (
    <h2 className="text-2xl font-semibold text-accent-400 mb-7">
      Welcome, {session.user.name}
    </h2>
  );
}
