import type { Metadata } from "next";
import { Nav } from "./_components/Nav";

import "./globals.css";

export const metadata: Metadata = {
  title: "SleepSense",
  description: "For better sleep",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const RootLayout = (props: { children: React.ReactNode }) => {
  const { children } = props;
  return (
    <html lang="en">
      <body className="dark:bg-gray-900 antialiased">
        <Nav />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
