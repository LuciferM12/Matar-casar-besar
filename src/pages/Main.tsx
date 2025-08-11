import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Selection from "../components/Selection";
import Modal from "../components/Modal";

const Main = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "GlobalContext is undefined. Make sure your component is wrapped in a GlobalContext.Provider."
    );
  }
  const { generateNew } = context;

  return (
    <>
      <main className="min-h-screen text-white flex items-center py-12 px-24 box-border flex-wrap flex-col text-xl max-sm:px-0">
        <h3 className="font-bold text-3xl">Select Your Choice</h3>
        <Selection />
        <button
          className="mt-12 bg-red-500 text-white border-none duration-600 ease-in font-semibold text-lg hover:bg-red-600 hover:cursor-pointer h-9 p-6 flex items-center justify-center rounded-2xl"
          onClick={() => generateNew()}
        >
          Generate new choices
        </button>
      </main>
      <Modal />
    </>
  );
};

export default Main;
