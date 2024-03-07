"use server";

import { Page } from "@/models/Page";
import { getServerSession } from "next-auth";
import mongoose from "mongoose";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// save the username in the db
const grabUsername = async (formData) => {
  ("use server");

  const username = formData.get("username");

  mongoose.connect(process.env.MONGODB_URI);

  // check db if username already exists
  const existingPageDoc = await Page.findOne({
    uri: username,
  });

  if (existingPageDoc) {
    return false;
    // return redirect("/account?usernameTaken=1");
  } else {
    const session = await getServerSession(authOptions);
    return await Page.create({ uri: username, owner: session?.user?.email });
    // return redirect("/account/" + username);
  }
  // const pageDoc = await Page.create({ uri: username });
  // return JSON.parse(JSON.stringify(pageDoc));
  // return redirect("/account/" + username);
};

export default grabUsername;
