"use server";

import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}
export async function updateGuest(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Please provide a validnationalID");

  console.log(session.user, "GUEST ID");
  try {
    const updateData = { nationality, countryFlag, nationalID };

    const { data, error } = await supabase
      .from("guests")
      .update(updateData)
      .eq("id", session.user.guestId)
      .select()
      .single();

    console.log(error);
  } catch (error) {
    console.error(error.message);
    throw new Error("Guest could not be updated");
  }
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
