import cn from "classnames";

export const SubmitButton = () => (
  <button
    type="submit"
    className={cn(
      "w-full font-medium rounded-lg text-sm text-white px-5 py-2.5 me-2 mb-2",
      "focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800",
      "bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700",
    )}
  >
    Submit
  </button>
);
