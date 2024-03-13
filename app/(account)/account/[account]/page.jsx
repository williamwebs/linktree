"use client";

import PageSettingsForm from "@/components/form/PageSettingsForm";
import ButtonToggler from "@/components/formItem/ButtonToggler";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { faImage, faPalette } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Account = () => {
  const { data: session } = useSession();
  console.log(session?.user);

  const url = useParams();

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
        <div className="max-w-24 -mt-8 mx-auto bg-white rounded-full p-2 shadow">
          <Image
            src={session?.user?.image}
            alt="avarter"
            width={128}
            height={128}
          />
        </div>
      </form>
    </div>
  );
};

export default Account;
