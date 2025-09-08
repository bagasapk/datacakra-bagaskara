import { PlusOutlined } from "@ant-design/icons";
import "../styles/CreateButton.css";

const CreateButton = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      aria-data={label}
      className="create__button bg-dark/70! hover:bg-dark! rounded-full text-3xl text-primary fixed bottom-5 right-5 cursor-pointer z-10"
    >
      <PlusOutlined />
    </button>
  );
};

export default CreateButton;
