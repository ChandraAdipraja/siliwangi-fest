import React from "react";
import { FiInbox, FiSearch } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

// Layout PageContainer component
const PageContainer: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col">
      <header className="bg-primary p-4 text-white dark:bg-darkBg">
        <nav className="container mx-auto flex items-center text-center">
          <h1 className="text-lg font-semibold mx-auto text-center text-secondaryBlack dark:text-white">
            Siliwangi Menfest
          </h1>
        </nav>
      </header>
      <main className="container relative mx-auto flex-grow dark:bg-darkBg dark:text-white bg-primary px-4 pb-20">
        {children || <Outlet />}
      </main>
      <div className="fixed bottom-0 z-40 w-full p-2 bg-white rounded-tr-2xl rounded-tl-2xl shadow-lg">
        <div className="flex justify-between p-4">
          <div
            className={`px-6 py-2 rounded-3xl ${
              useLocation().pathname === "/" ? "bg-active" : "bg-white"
            }`}
            onClick={() => navigate("/")}
          >
            <GoHome className="text-3xl" />
          </div>
          <div
            className={`px-6 py-2 rounded-3xl ${
              useLocation().pathname === "/create-message"
                ? "bg-active"
                : "bg-white"
            }`}
            onClick={() => navigate("/create-message")}
          >
            <FiInbox className="text-3xl" />
          </div>
          <div
            className={`px-6 py-2 rounded-3xl ${
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
