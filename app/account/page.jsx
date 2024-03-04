import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

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
      <form>
        <h2 className="text-4xl font-bold mb-2 text-center">
          Grab your username
        </h2>
        <p className="text-center mb-6 text-gray-500">Choose your username</p>
        <div className="mx-auto max-w-xs flex flex-col gap-1">
          <input
            type="text"
            placeholder="username"
            className="w-full block p-2 border text-center rounded"
            defaultValue={username}
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded"
          >
            Claim your username
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountPage;
