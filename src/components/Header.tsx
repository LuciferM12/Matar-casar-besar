import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { IoIosAlert } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "GlobalContext is undefined. Make sure your component is wrapped in a GlobalContext.Provider."
    );
  }
  const { openModal } = context;

  return (
    <header className="w-full h-[90px] flex items-center justify-evenly p-5 box-border text-white text-4xl max-sm:p-0">
      <img src="logo.png" className="w-36" alt="logo" />
      <div className="flex gap-5">
        <IoIosAlert onClick={() => openModal()} className="cursor-pointer" />
        <a
          href="https://github.com/LuciferM12"
          className="decoration-none text-inherit duration-300 ease-in hover:text-red-400 cursor-pointer"
        >
          <FaGithub />
        </a>
      </div>
    </header>
  );
};

export default Header;
