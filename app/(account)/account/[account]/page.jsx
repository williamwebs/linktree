// import ButtonToggler from "@/components/formItem/ButtonToggler";
// import { useSession } from "next-auth/react";
// import { useParams } from "next/navigation";
// import { faImage, faPalette } from "@fortawesome/free-solid-svg-icons";
// import Image from "next/image";
// import { useState } from "react";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import MyPageForm from "@/components/form/MyPageForm";
import { Page } from "@/models/Page";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

const Account = async () => {
  const session = await getServerSession(authOptions);

  // connect to database
  await mongoose.connect(process.env.MONGODB_URI);

  // fetch page details from the database
  const page = await Page.findOne({ owner: session?.user?.email });
  console.log([page]);

  return (
    <div className="">
      <MyPageForm session={session} page={page} />
    </div>
  );
};

export default Account;
