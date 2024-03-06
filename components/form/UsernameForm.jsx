"use client";

import { useState } from "react";
import grabUsername from "@/actions/grabUsername";
import { redirect } from "next/navigation";
import SubmitButton from "../buttons/SubmitButton";

const UsernameForm = ({ username }) => {
  const [taken, setTaken] = useState(false);

  // handle form submit
  const handleFormSubmit = async (formData) => {
    const result = await grabUsername(formData);
    setTaken(result === false);

    //   if username is not taken, redirect to account page
    if (result) {
      redirect("/account/" + formData.get("username"));
    }

    console.log(result);
  };
  return (
    <form action={handleFormSubmit}>
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
        {/* error message */}
        {taken && (
          <div className="bg-red-100 text-red-800 border border-red-200 text-xs font-semibold p-2 text-center my-1 w-full">
            Username is already taken! Try something unique.
          </div>
        )}

        <SubmitButton>
          <span>Claim your username</span>
        </SubmitButton>
      </div>
    </form>
  );
};

export default UsernameForm;
