import cn from "classnames";

const inputCN = cn(
  "w-4 h-4 text-blue-600 rounded focus:ring-2",
  "focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 ",
  "bg-gray-100 dark:bg-gray-600",
  "border-gray-300 dark:border-gray-500",
);

const labelCN =
  "cursor-pointer w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300";

export const MultiOptionSelect = (props: {
  title: string;
  formName: string;
  options: string[];
}) => {
  const { title, formName, options } = props;

  return (
    <>
      <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <ul
        className={cn(
          "items-center w-full text-sm font-medium rounded-lg",
          "text-gray-900 dark:text-white",
          "bg-white dark:bg-gray-700",
          "border border-gray-200 dark:border-gray-600",
        )}
      >
        {options.map((option, idx) => (
          <li
            className={cn(
              idx === options.length - 1 // last element needs no border-b
                ? "w-full dark:border-gray-600"
                : "w-full border-b border-gray-200 dark:border-gray-600",
            )}
            key={option}
          >
            <div className="flex items-center ps-3">
              <input
                className={inputCN}
                id={option}
                name={formName}
                type="checkbox"
                value={option}
              />
              <label htmlFor={option} className={labelCN}>
                {option}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
