import cn from "classnames";

export const SleepScoreInput = () => (
  <>
    <label
      htmlFor="sleep_score"
      className="block mb-2 font-semibold text-gray-900 dark:text-white"
    >
      Enter your sleep score
    </label>
    <input
      type="number"
      id="sleep_score"
      className={cn(
        "block w-full p-2.5 rounded-lg",
        "bg-gray-50 dark:bg-gray-700",
        "border border-gray-300 dark:border-gray-600",
        "text-gray-900 text-sm dark:text-white dark:placeholder-gray-400",
        "focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500",
      )}
      placeholder="95"
    />
    <p className="mt-2 text-sm text-gray-900 dark:text-gray-400">
      Enter your score from last night (optional)
    </p>
  </>
);
