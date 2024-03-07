"use client";

import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <button
      onClick={signOut}
      className="flex items-center gap-2 border rounded py-2 px-4 shadow-md"
    >
      <span>Logout</span>
      <FontAwesomeIcon icon={faRightFromBracket} />
    </button>
  );
};

export default LogoutButton;
