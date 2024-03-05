import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import UsernameForm from "@/components/form/UsernameForm";

const AccountPage = async ({ searchParams }) => {
  const session = await getServerSession(authOptions);
  console.log(session);
  const username = searchParams.username;

  // protecting the route
  if (!session) {
    redirect("/");
  }

  return (
    <div>
      <UsernameForm username={username} />
    </div>
  );
};

export default AccountPage;
