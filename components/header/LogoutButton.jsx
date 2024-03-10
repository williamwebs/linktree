"use client";

import { icon } from "@fortawesome/fontawesome-svg-core";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "next-auth/react";

const LogoutButton = ({
  className = "flex items-center gap-2 border rounded py-2 px-4 shadow-md",
  iconLeft = false,
}) => {
  return (
    <button onClick={signOut} className={className}>
      {iconLeft && <FontAwesomeIcon icon={faRightFromBracket} />}
      <span className="text-gray-700">Logout</span>
      {!iconLeft && <FontAwesomeIcon icon={faRightFromBracket} />}
    </button>
  );
};

export default LogoutButton;
