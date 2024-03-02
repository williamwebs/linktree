import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white border-b py-4">
      <div className="max-w-5xl mx-auto flex justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href={"/"}>LinkList</Link>
          <nav className="flex gap-4 text-slate-500 text-sm">
            <Link href={"/about"}>About</Link>
            <Link href={"/pricing"}>Pricing</Link>
            <Link href={"/contact"}>Contact</Link>
          </nav>
        </div>
        <div className="flex gap-4 text-slate-500 text-sm">
          <Link href={"/login"}>Sign In</Link>
          <Link href={"/register"}>Create Account</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
