import cn from "classnames";
import Link from "next/link";
import { buttonClassName } from "./Button";

export const LinkButton = (props: { text: string; href: string }) => {
  const { text, href } = props;

  return (
    <Link className={cn(buttonClassName, "block text-center")} href={href}>
      {text}
    </Link>
  );
};
