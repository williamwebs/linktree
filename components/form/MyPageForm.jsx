import ButtonToggler from "../formItem/ButtonToggler";
import Image from "next/image";
import { faImage, faPalette, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { savePageSettings } from "@/actions/pageActions";

const MyPageForm = ({ session, page }) => {
  // save the user data to the database
  const saveBaseSettings = async (formData) => {
    "use server";
    console.log(formData.get("displayName"));
    await savePageSettings(formData);
  };
  return (
    <form action={saveBaseSettings}>
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
          defaultValue={page.displayName}
          placeholder="John Doe"
        />

        <label className="input-label" htmlFor="locationInput">
          Location
        </label>
        <input
          type="text"
          id="locationInput"
          name="location"
          defaultValue={page.location}
          placeholder="Somewhere in the world"
        />

        <label className="input-label" htmlFor="bioInput">
          Bio
        </label>
        <textarea
          id="bioInput"
          name="bio"
          defaultValue={page.bio}
          placeholder="Your bio goes here..."
        ></textarea>
      </div>

      <div className="max-w-sm mx-auto">
        <button
          type="submit"
          className="w-full py-2 px-4 mx-auto flex gap-2 items-center justify-center bg-blue-500 disabled:bg-blue-200 disabled:text-gray-400 text-white"
        >
          <FontAwesomeIcon icon={faSave} className="w-4" />
          <span>Save</span>
        </button>
      </div>
    </form>
  );
};

export default MyPageForm;
