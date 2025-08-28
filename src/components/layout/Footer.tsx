import { useToggleThemeStore } from "@/store/sidebarStore";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const { CurrentTheme } = useToggleThemeStore();
  return (
    <div>
      <footer
        className={`${CurrentTheme === "dark" ? "bg-dark " : "bg-white"
          } rounded-lg  m-4`}
      >
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <hr className="my-6 border-violet-700 sm:mx-auto dark:border-gray-700 lg:my-8" />

          <span className="block text-lg text-white text-center dark:text-gray-400">
            <span>
              © 2025 &nbsp;
              <Link
                href="/"
                className="hover:underline cursor-pointer text-violet-700"
              >
                Bharatesh Poojary
              </Link>
            </span>
            <span> All Rights Reserved.</span>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
