"use client";

import ButtonToggler from "@/components/formItem/ButtonToggler";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { faImage, faPalette } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import mongoose from "mongoose";
import { Page } from "@/models/Page";

const Account = async () => {
  const { data: session } = useSession();
  console.log(session?.user);

  const url = useParams();

  // fetch page details from the database

  // connect to database
  mongoose.connect(process.env.MONGODB_URI);

  const pageDetails = await Page.findOne({ owner: session?.user?.email });
  console.log(pageDetails);

  return (
    <div>
      <form action="">
        <div className="bg-gray-300 p-16 flex justify-center items-center">
          <ButtonToggler
            options={[
              { value: "color", icon: faPalette, label: "Color" },
              { value: "image", icon: faImage, label: "Image" },
            ]}
          />
        </div>
        <div className="flex justify-center">
          <Image
            src={session?.user?.image}
            alt="avarter"
            width={100}
            height={100}
            className="rounded-full relative -top-8 border-4 border-white shadow-xl "
          />
        </div>
        <div className="py-4">
          <label className="input-label" htmlFor="nameInput">
            Display name
          </label>
          <input
            type="text"
            id="nameInput"
            name="displayName"
            defaultValue={""}
            placeholder="John Doe"
          />

          <label className="input-label" htmlFor="locationInput">
            Location
          </label>
          <input
            type="text"
            id="locationInput"
            name="location"
            defaultValue={""}
            placeholder="Somewhere in the world"
          />

          <label className="input-label" htmlFor="bioInput">
            Bio
          </label>
          <textarea
            id="bioInput"
            name="bio"
            defaultValue={""}
            placeholder="Your bio goes here..."
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default Account;
