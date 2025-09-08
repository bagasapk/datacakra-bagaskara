import { Card, Image } from "antd";
import { useNavigate } from "react-router";

const TravelCard = ({
  title,
  imageUrl,
  description,
  documentId,
}: {
  title: string;
  imageUrl: string;
  description: string;
  documentId: string;
}) => {
  const navigate = useNavigate();
  return (
    <Card
    variant="borderless"
      className="shadow-md hover:scale-105 transition-all"
      title={
          <Image
            rootClassName="block!"
            height={200}
            className="rounded-t object-cover"
            alt={title}
            src={imageUrl}
          ></Image>
      }
      styles={{
        header: { padding: 0, position: "unset" },
        body: { padding: 0 },
      }}
    >
      <div
        className="p-4 cursor-pointer w-[80vw] sm:w-full"
        onClick={() => navigate("/destination/" + documentId + "/detail")}
      >
        <h2 className="text-lg truncate font-bold">{title}</h2>
        <p className="truncate">{description}</p>
      </div>
    </Card>
  );
};

export default TravelCard;
