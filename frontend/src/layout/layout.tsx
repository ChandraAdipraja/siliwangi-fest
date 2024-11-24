import React from "react";
import { FiInbox, FiSearch } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { useNavigate, useLocation } from "react-router-dom";

// Layout PageContainer component
const PageContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col">
      {/* Navbar */}
      <header className=" bg-primary p-4 text-white dark:bg-darkBg">
        <nav className="container mx-auto flex items-center text-center">
          {/* Website Title */}
          <h1 className="text-lg font-semibold mx-auto text-center text-secondaryBlack dark:text-white">
            Siliwangi Menfest
          </h1>
        </nav>
      </header>
      {/* Main Content */}
      <main className="container relative mx-auto flex-grow dark:bg-darkBg dark:text-white bg-primary px-4">
        {children}
      </main>
      {/* Footer */}
      {/* <footer className="bg-white-800  block border-t-4 border-black p-4 text-center text-secondaryBlack dark:border-darkBorder dark:bg-darkBg dark:text-white">
        © 2024 My Website - Created by Blablabla
      </footer> */}

      {/* bottom nav */}
      <div className="fixed bottom-0 z-10 w-full p-2 bg-white rounded-tr-2xl rounded-tl-2xl transition-all">
        <div className="flex justify-between p-4 transition-all">
          <div
            className={`bg-active px-6 py-2 rounded-3xl transition-all  ${
              useLocation().pathname === "/" ? "bg-active" : "bg-white"
            }`}
            onClick={() => navigate("/")}
          >
            <GoHome className="text-3xl" />
          </div>
          <div
            className={`bg-active px-6 py-2 rounded-3xl transition-all ${
              useLocation().pathname === "/create-message"
                ? "bg-active"
                : "bg-white"
            }`}
            onClick={() => navigate("/create-message")}
          >
            <FiInbox className="text-3xl" />
          </div>
          <div
            className={`bg-active px-6 py-2 rounded-3xl transition-all ${
              useLocation().pathname === "/search-name"
                ? "bg-active"
                : "bg-white"
            }`}
            onClick={() => navigate("/search-name")}
          >
            <FiSearch className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContainer;
