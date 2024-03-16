"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Page } from "@/models/Page";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

export async function savePageSettings(formData) {
  // connect to database
  mongoose.connect(process.env.MONGODB_URI);

  // grab session
  const session = await getServerSession(authOptions);

  if (session) {
    // grab the user page
    const page = await Page.findOne({ owner: session?.user.email });
    console.log(page);

    //   grab formData
    const displayName = formData.get("displayName");
    const location = formData.get("location");
    const bio = formData.get("bio");

    await Page.updateOne(
      { owner: session?.user?.email },
      { displayName, location, bio }
    );

    return true;
  }

  return false;
}
