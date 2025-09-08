import { Empty } from "antd";
import { type PropsWithChildren } from "react";
import Loading from "./Loading";

const LoadingLayout = ({
  isLoading,
  isEmpty,
  children,
  fullscreen,
}: {
  fullscreen?: boolean;
  isLoading: boolean;
  isEmpty: boolean;
} & PropsWithChildren) => {
  if (isLoading) return <Loading fullscreen={fullscreen} />;
  if (isEmpty) return <Empty className="my-4"/>;
  return children;
};

export default LoadingLayout;
