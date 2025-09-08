import { PlusOutlined } from "@ant-design/icons";
import "../styles/CreateButton.css";
import clsx, { type ClassValue } from "clsx";

const CreateButton = ({
  label,
  onClick,
  className = "bg-dark/70! hover:bg-dark! text-primary",
}: {
  label: string;
  onClick: () => void;
  className?: ClassValue;
}) => {
  return (
    <button
      onClick={onClick}
      aria-data={label}
      className={clsx(
        className,
        "create__button rounded-full text-3xl fixed bottom-5 right-5 cursor-pointer z-10"
      )}
    >
      <PlusOutlined />
    </button>
  );
};

export default CreateButton;
