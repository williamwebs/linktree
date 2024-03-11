"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoutButton from "../header/LogoutButton";
import {
  faChartLine,
  faFileLines,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AppSideNav = () => {
  const path = usePathname();
  console.log(path);

  // Function to check if the current path starts with '/account'
  const isAccountActive = () => {
    return path.startsWith("/account");
  };

  return (
    <nav className="flex flex-col gap-4 mt-10 text-center text-gray-500">
      <Link
        href={"/account"}
        className={
          "flex items-center gap-4 justify-start " +
          (isAccountActive() ? "text-blue-500" : "")
        }
      >
        <FontAwesomeIcon icon={faFileLines} className="w-4" />
        <span className="">My Page</span>
      </Link>
      <Link
        href={"/analytics"}
        className={
          "flex items-center gap-4 justify-start " +
          (path === "/analytics" ? "text-blue-500" : "")
        }
      >
        <FontAwesomeIcon icon={faChartLine} className="w-4" />
        <span className="">Analytics</span>
      </Link>
      <Link
        href={"/settings"}
        className={
          "flex items-center gap-4 justify-start " +
          (path === "/settings" ? "text-blue-500" : "")
        }
      >
        <FontAwesomeIcon icon={faGear} className="w-4" />
        <span className="">Settings</span>
      </Link>

      {/* logout button */}
      <LogoutButton
        iconLeft={true}
        className="flex gap-4 justify-start items-center"
      />
    </nav>
  );
};

export default AppSideNav;
