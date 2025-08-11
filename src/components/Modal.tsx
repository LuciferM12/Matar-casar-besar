import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { IoIosCloseCircle } from "react-icons/io";

const Modal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "GlobalContext is undefined. Make sure your component is wrapped in a GlobalContext.Provider."
    );
  }
  const { open, setOpen } = context;
  const closeModal = () => {
    setOpen(!open);
  };

  return (
    <>
      {open && (
        <>
          <div
            className="bg-black/70 fixed top-0 left-0 right-0 bottom-0 z-30"
          />
          <dialog className="absolute top-[100px] p-0 w-[300px] box-border h-[200px] bg-stone-900 flex justify-start items-center flex-col gap-2.5 z-50 text-amber-100" onClose={closeModal} open={open}>
            <form method="dialog" className="flex w-full justify-end items-start h-fit p-1.5">
                <button className="bg-transparent text-white border-none flex items-end justify-center text-3xl cursor-pointer">
                    <IoIosCloseCircle />
                </button>
            </form>
            <h1>Rules</h1>
            <p className="py-1">Of the three actresses below, select who you would kill, who you would kiss with, and who you would marry.</p>
          </dialog>
        </>
      )}
    </>
  );
};

export default Modal;
