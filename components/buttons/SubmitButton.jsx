import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ children }) => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className={
        "w-full py-2 px-4 mx-auto flex gap-2 items-center justify-center bg-blue-500 disabled:bg-blue-200 disabled:text-gray-400 text-white"
      }
    >
      {pending ? <FontAwesomeIcon icon={faSpinner} spin /> : children}
    </button>
  );
};

export default SubmitButton;
