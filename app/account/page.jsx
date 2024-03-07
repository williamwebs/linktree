import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import UsernameForm from "@/components/form/UsernameForm";
import { Page } from "@/models/Page";

const AccountPage = async ({ searchParams }) => {
  const session = await getServerSession(authOptions);
  // console.log(session);
  const username = searchParams.username;

  // protecting the route
  if (!session) {
    return redirect("/");
  }

  const page = await Page.findOne({ owner: session?.user?.email });
  console.log(page);

  if (page) {
    return <div>Your page is /{page.uri}</div>;
  }

  return (
    <div>
      <UsernameForm username={username} />
    </div>
  );
};

export default AccountPage;
