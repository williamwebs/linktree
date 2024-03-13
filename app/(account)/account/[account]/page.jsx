"use client";

import PageSettingsForm from "@/components/form/PageSettingsForm";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";

const Account = () => {
  const { data: session } = useSession();
  console.log(session.user);

  const url = useParams();

  return <PageSettingsForm />;
};

export default Account;
