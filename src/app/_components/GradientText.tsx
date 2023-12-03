import cn from "classnames";

export const GradientText = (props: {
  colorWay: "green" | "red";
  text: string;
}) => {
  const { colorWay, text } = props;

  return (
    <span
      className={cn(
        "text-transparent bg-clip-text bg-gradient-to-r",
        colorWay === "green"
          ? "from-sky-400 to-emerald-600"
          : "from-orange-400 to-red-600",
      )}
    >
      {text}
    </span>
  );
};
