import { Page } from "@/models/Page";
import mongoose from "mongoose";

// save the username in the db
const grabUsername = async (formData) => {
  "use server";
  const username = formData.get("username");
  mongoose.connect(process.env.MONGODB_URI);
  const pageDoc = await Page.create({ uri: username });
  return JSON.parse(JSON.stringify(pageDoc));
};

export default grabUsername;
