"use client";

import PageSettingsForm from "@/components/form/PageSettingsForm";
import { useParams } from "next/navigation";

const Account = () => {
  const url = useParams();

  return <PageSettingsForm />;
};

export default Account;
