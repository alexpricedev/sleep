import cn from "classnames";

export const Textarea = (props: {
  title: string;
  formName: string;
  placeholder: string;
}) => {
  const { title, formName, placeholder } = props;

  return (
    <>
      <label
        htmlFor={formName}
        className="block mb-2 font-semibold text-gray-900 dark:text-white"
      >
        {title}
      </label>
      <textarea
        className={cn(
          "block p-2.5 w-full rounded-lg border border-gray-300 min-h-[50px]",
          "text-sm text-gray-900 bg-gray-50",
          "focus:ring-blue-500 focus:border-blue-500",
          "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",
          "dark:focus:ring-blue-500 dark:focus:border-blue-500",
        )}
        id={formName}
        name={formName}
        placeholder={placeholder}
      />
    </>
  );
};
