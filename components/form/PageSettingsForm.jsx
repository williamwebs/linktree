import { faImage, faPalette } from "@fortawesome/free-solid-svg-icons";
import ButtonToggler from "../formItem/ButtonToggler";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const PageSettingsForm = ({page}) => {
  const session = getServerSession(authOptions);
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

export default PageSettingsForm;
