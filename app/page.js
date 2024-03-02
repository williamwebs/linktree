import Header from "@/components/header/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="p-4 pt-32 max-w-5xl mx-auto">
        <div className="max-w-md mb-8">
          <h1 className="text-6xl font-bold">
            Your one link <br /> for everything
          </h1>
          <h2 className="text-slate-400 text-xl mt-6">
            Share your links, social profiles, contact info and more on one page
          </h2>
        </div>
        <form className="inline-flex items-center shadow-lg">
          <span className="bg-white py-4 pl-4">linklist.to/</span>
          <input
            type="text"
            className="py-4 outline-none"
            placeholder="username"
          />
          <button type="submit" className="bg-blue-500 text-white py-4 px-6">
            Join for Free
          </button>
        </form>
      </section>
    </main>
  );
}
