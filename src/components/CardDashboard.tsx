import type { CardProps } from "antd";
import Card from "antd/es/card/Card";
import clsx from "clsx";

const CardDashboard = ({ className, ...props }: CardProps) => {
  return (
    <Card
      className={clsx(
        "cursor-pointer hover:scale-105 transition-all",
        className
      )}
      {...props}
    ></Card>
  );
};

export default CardDashboard;
