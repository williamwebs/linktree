import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import UsernameForm from "@/components/form/UsernameForm";
import { Page } from "@/models/Page";
import mongoose from "mongoose";

const AccountPage = async ({ searchParams }) => {
  const session = await getServerSession(authOptions);
  // console.log(session);
  const username = searchParams.username;

  // protecting the route
  if (!session) {
    return redirect("/");
  }

  // check if user already has a page created
  mongoose.connect(process.env.MONGODB_URI);

  const page = await Page.findOne({ owner: session?.user?.email });

  if (page) {
    redirect("/account/" + page?.uri);
    // return <div>Your page is /{page.uri}</div>;
  }

  return (
    <div>
      <UsernameForm username={username} />
    </div>
  );
};

export default AccountPage;
