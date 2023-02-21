import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <main className="flex flex-row gap-4 items-center justify-center w-full flex-1 px-20 text-center">
      <Link
        className="p-4 bg-blue-600 shadow-md rounded-lg text-white active:scale-95 transition-transform duration-100 ease-in-out"
        href="/page"
      >
        Page 1
      </Link>
      <Link
        className="p-4 bg-blue-600 shadow-md rounded-lg text-white active:scale-95 transition-transform duration-100 ease-in-out"
        href="/page2"
      >
        Page 2
      </Link>
    </main>
  </div>
);

export default Home;
