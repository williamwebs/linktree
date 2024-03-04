"use client";

import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const HeroForm = () => {
  useEffect(() => {
    if ("localStorage" in window && window.localStorage.getItem("username")) {
      const username = window.localStorage.getItem("username");
      window.localStorage.removeItem("username");
      redirect("/account?username=" + username);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //   this method is used instead of useState hook
    const form = e.target;
    const username = form.querySelector("input").value;
    console.log(username);

    //   save username in local storage for use later in account page
    if (username.length > 0) {
      window.localStorage.setItem("username", username);
      await signIn("google");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="inline-flex items-center shadow-lg"
    >
      <span className="bg-white py-4 pl-4">linklist.to/</span>
      <input type="text" className="py-4 outline-none" placeholder="username" />
      <button type="submit" className="bg-blue-500 text-white py-4 px-6">
        Join for Free
      </button>
    </form>
  );
};

export default HeroForm;
