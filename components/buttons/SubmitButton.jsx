import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ children }) => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="w-full p-2 bg-blue-500 disabled:bg-blue-200 disabled:text-gray-400 text-white"
    >
      {pending ? <FontAwesomeIcon icon={faSpinner} /> : children}
    </button>
  );
};

export default SubmitButton;
