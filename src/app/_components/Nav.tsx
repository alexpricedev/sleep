import Link from "next/link";

export const Nav = () => (
  <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <Link href="/" className="flex items-center space-x-3">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          SleepSense
        </span>
      </Link>
    </div>
  </nav>
);
