import { faImage, faPalette } from "@fortawesome/free-solid-svg-icons";
import ButtonToggler from "../formItem/ButtonToggler";

const PageSettingsForm = (page) => {
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
        <div>avarter</div>
      </form>
    </div>
  );
};

export default PageSettingsForm;
