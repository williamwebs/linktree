import HeroForm from "@/components/form/HeroForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default function Home() {
  const session = getServerSession(authOptions);
  console.log(session);

  // redirect if there is a session
  if (session) redirect("/account");

  return (
    <main>
      <section className="pt-32">
        <div className="max-w-md mb-8">
          <h1 className="text-6xl font-bold">
            Your one link <br /> for everything
          </h1>
          <h2 className="text-slate-400 text-xl mt-6">
            Share your links, social profiles, contact info and more on one page
          </h2>
        </div>
        {/* username form */}
        <HeroForm />
      </section>
    </main>
  );
}
