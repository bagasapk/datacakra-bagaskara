import { Spin, type SpinProps } from "antd";
import { IcLogo } from "../assets/icons";
import { LoadingOutlined } from "@ant-design/icons";

const Loading = ({ ...props }: SpinProps) => {
  return (
    <div className="w-full my-48">
      <Spin
        className="w-full"
        indicator={<LoadingOutlined spin className="text-4xl" />}
        tip={
          <p className="font-amarante justify-center flex items-center text-dark!">
            <IcLogo className="mr-2" /> Packing your bags ...{" "}
          </p>
        }
        {...props}
      />
     {!props.fullscreen && <p className="font-amarante justify-center flex items-center text-dark!">
        <IcLogo className="mr-2" /> Packing your bags ...{" "}
      </p>}
    </div>
  );
};

export default Loading;
