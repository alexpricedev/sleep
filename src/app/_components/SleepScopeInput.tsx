import cn from "classnames";

export const SleepScoreInput = () => (
  <>
    <label
      className="block mb-2 font-semibold text-gray-900 dark:text-white"
      htmlFor="sleep_score"
    >
      Enter your sleep score
    </label>
    <input
      className={cn(
        "block w-full p-2.5 rounded-lg",
        "bg-gray-50 dark:bg-gray-700",
        "border border-gray-300 dark:border-gray-600",
        "text-gray-900 text-sm dark:text-white dark:placeholder-gray-400",
        "focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500",
      )}
      id="sleep_score"
      max="100"
      min="0"
      name="sleep_score"
      placeholder="0 - 100"
      required
      type="number"
    />
  </>
);
