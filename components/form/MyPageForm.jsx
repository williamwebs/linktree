"use client";

import ButtonToggler from "../formItem/ButtonToggler";
import Image from "next/image";
import { faImage, faPalette, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SubmitButton from "../buttons/SubmitButton";
import { savePageSettings } from "@/actions/pageActions";
import toast from "react-hot-toast";
import { useState } from "react";

const MyPageForm = ({ session, page }) => {
  const [bgType, setBgType] = useState(page.bgType);
  const [bgColor, setBgColor] = useState(page.bgColor);

  // save the user data to the database
  const saveBaseSettings = async (formData) => {
    const result = await savePageSettings(formData);

    // show toast message when saved successfully
    if (result) toast.success("Saved!");
  };
  return (
    <form action={saveBaseSettings}>
      <div
        style={{ backgroundColor: bgColor }}
        className="p-16 flex justify-center items-center"
      >
        <div>
          <ButtonToggler
            defaultValue={page.bgType}
            options={[
              { value: "color", icon: faPalette, label: "Color" },
              { value: "image", icon: faImage, label: "Image" },
            ]}
            onChange={(val) => setBgType(val)}
          />

          {/* show only when color is selected */}
          {bgType === "color" && (
            <div className="bg-gray-200 shadow p-1 text-gray-700 mt-2">
              <div className="flex gap-2 items-center justify-center">
                <span>Background color:</span>
                <input
                  type="color"
                  name="bgColor"
                  onChange={(e) => setBgColor(e.target.value)}
                  defaultValue={page.bgColor}
                />
              </div>
            </div>
          )}
        </div>
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
        <SubmitButton>
          <FontAwesomeIcon icon={faSave} className="w-4" />
          <span>Save</span>
        </SubmitButton>
      </div>
    </form>
  );
};

export default MyPageForm;
