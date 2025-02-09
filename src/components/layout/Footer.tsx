import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <hr className="my-6 border-violet-700 sm:mx-auto dark:border-gray-700 lg:my-8" />

          <span className="block text-md text-gray-500 text-center dark:text-gray-400">
            <div>
              © 2025 &nbsp;
              <Link
                href="/"
                className="hover:underline cursor-pointer text-violet-700"
              >
                Bharatesh Poojary.&nbsp;
              </Link>
            </div>
            <div> All Rights Reserved.</div>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
