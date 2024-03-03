import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Header = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <header className="bg-white border-b py-4">
      <div className="max-w-5xl mx-auto flex justify-between px-4">
        <div className="flex items-center gap-6">
          <Link
            href={"/"}
            className="text-blue-500 font-bold flex items-center gap-1"
          >
            <FontAwesomeIcon icon={faLink} />
            <span>LinkList</span>
          </Link>
          <nav className="flex gap-4 text-slate-500 text-sm">
            <Link href={"/about"}>About</Link>
            <Link href={"/pricing"}>Pricing</Link>
            <Link href={"/contact"}>Contact</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4 text-slate-500 text-sm">
          {session ? (
            <>
              <Link href={"/account"}>Hello,{session?.user?.name}</Link>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link href={"/login"}>Sign In</Link>
              <Link href={"/register"}>Create Account</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
