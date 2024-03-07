"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <div>
      <div className="max-w-sm mx-auto p-4 border bg-white">
        <h1 className="font-bold text-4xl text-center mb-6">Sign In</h1>
        <p className="text-center text-gray-500 mb-6">
          Sign in to your account using one of the methods below:
        </p>
        <button
          onClick={() => signIn("google")}
          className="bg-blue-500 text-white text-center w-full py-4 flex gap-2 items-center justify-center"
        >
          <FontAwesomeIcon icon={faGoogle} className="w-4" />
          Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
