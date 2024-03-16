import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonToggler = ({ options }) => {
  return (
    <div className="radio-togglers shadow">
      {options.map((i) => (
        <label key={i.label}>
          <input type="radio" name="bgType" value={i.value} />
          <span className="flex items-center">
            <FontAwesomeIcon icon={i.icon} className="w-4 mr-1" />
            {i.label}
          </span>
        </label>
      ))}
    </div>
  );
};

export default ButtonToggler;