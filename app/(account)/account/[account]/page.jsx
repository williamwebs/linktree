"use client";

import { useParams } from "next/navigation";

const Account = () => {
  const url = useParams();
  console.log(url.account);
  return <div>AccountPage is:/ {url.account} </div>;
};

export default Account;
