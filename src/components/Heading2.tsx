import clsx from "clsx";
import {
  type DetailedHTMLProps,
  type HTMLAttributes,
  type PropsWithChildren,
} from "react";

const Heading2 = ({
  children,
  className,
}: PropsWithChildren &
  DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >) => {
  return (
    <h2
      className={clsx(
        "text-2xl font-amarante font-medium  text-shadow-2xs mb-4 text-dark",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default Heading2;
