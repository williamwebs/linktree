import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import grabUsername from "@/actions/grabUsername";

const AccountPage = async ({ searchParams, ...rest }) => {
  const session = await getServerSession(authOptions);
  console.log(session);
  const username = searchParams.username;
  console.log(rest);

  // protecting the route
  if (!session) {
    redirect("/");
  }

  return (
    <div>
      <form action={grabUsername}>
        <h2 className="text-4xl font-bold mb-2 text-center">
          Grab your username
        </h2>
        <p className="text-center mb-6 text-gray-500">Choose your username</p>
        <div className="mx-auto max-w-xs flex flex-col gap-1">
          <input
            type="text"
            name="username"
            placeholder="username"
            className="w-full block p-2 border text-center"
            defaultValue={username}
          />
          <button type="submit" className="w-full p-2 bg-blue-500 text-white">
            Claim your username
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountPage;
