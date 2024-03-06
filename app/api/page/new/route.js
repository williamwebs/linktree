import { Page } from "@/models/Page";
import { connectToDB } from "@/utils/database";

export const POST = async (req) => {
  const { username, userId } = await req.json();

  try {
    await connectToDB();

    const existingPageDoc = await Page.findOne({ uri: username });

    if (existingPageDoc) {
      return false;
    } else {
    }
  } catch (error) {}
};
