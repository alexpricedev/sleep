import Link from "next/link";

export const Nav = () => (
  <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
    <div className="max-w-screen-xl p-4">
      <Link href="/" className="text-2xl font-semibold dark:text-white">
        SleepSense
      </Link>
    </div>
  </nav>
);
