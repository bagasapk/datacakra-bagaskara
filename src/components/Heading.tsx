import clsx from "clsx";
import {
  type DetailedHTMLProps,
  type HTMLAttributes,
  type PropsWithChildren,
} from "react";

const Heading = ({
  children,
  ...props
}: PropsWithChildren &
  DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >) => {
  return (
    <h1
      className={clsx(
        "text-4xl font-bold font-amarante text-dark text-center",
        props.className
      )}
    >
      {children}
    </h1>
  );
};

export default Heading;
