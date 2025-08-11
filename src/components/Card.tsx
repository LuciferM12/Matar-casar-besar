import { useContext } from "react";
import { GlobalContext, type PossibleActions } from "../context/GlobalContext";
import { FaKissWinkHeart } from "react-icons/fa";
import { GiBigDiamondRing, GiCurvyKnife } from "react-icons/gi";

interface CardProps {
  imageUrl: string;
  title: string;
  value: number;
  age: number;
}

const Card = ({ imageUrl, title, value, age }: CardProps) => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "GlobalContext is undefined. Make sure your component is wrapped in a GlobalContext.Provider."
    );
  }
  const { elections, setElections } = context;

  const manageState = (action: "marry" | "kill" | "kiss") => {
    setElections((prev: PossibleActions) => {
      const next = { ...prev };

      if (action === "marry") next.married = value;
      if (action === "kill") next.killed = value;
      if (action === "kiss") next.kissed = value;

      if (next.kissed === value && action !== "kiss") next.kissed = null;
      if (next.married === value && action !== "marry") next.married = null;
      if (next.killed === value && action !== "kill") next.killed = null;

      return next;
    });
  };

  return (
    <div className="min-h-[500px] w-[300px] flex flex-col bg-transparent rounded-xl text-red-300 duration-200 ease-in">
      <div className="w-full h-[400px] perspective-[1000px]">
        <div className="w-full h-full transition-transform duration-600 transform-3d relative hover:rotate-y-180">
          <div className="absolute w-full h-full backface-hidden rounded-xl">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover rounded-xl shadow-[-4px_5px_5px_0px_rgba(0,0,0,0.75)]"
            />
          </div>
          <div className="absolute w-full h-full backface-hidden rounded-xl bg-red-500 text-white rotate-y-180 flex flex-col items-center justify-center">
            <h3>Nombre: {title}</h3>
            <h3>Edad: {age}</h3>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-evenly">
        <button
          className={`
            text-4xl w-1/3 bg-transparent border-none flex items-center justify-center p-5 gap-1.5 
            transition-transform duration-300 ease-in hover:cursor-pointer hover:scale-125
            ${
              elections.kissed === value
                ? "text-red-400 scale-125"
                : "text-white"
            }
          `}
          onClick={() => manageState("kiss")}
        >
          <FaKissWinkHeart />
        </button>
        <button
          className={`
            text-4xl w-1/3 bg-transparent border-none flex items-center justify-center p-5 gap-1.5 
            transition-transform duration-300 ease-in hover:cursor-pointer hover:scale-125
            ${
              elections.married === value
                ? "text-red-400 scale-125"
                : "text-white"
            }
          `}
          onClick={() => manageState("marry")}
        >
          <GiBigDiamondRing />
        </button>
        <button
          className={`
            text-4xl w-1/3 bg-transparent border-none flex items-center justify-center p-5 gap-1.5 
            transition-transform duration-300 ease-in hover:cursor-pointer hover:scale-125
            ${
              elections.killed === value
                ? "text-red-400 scale-125"
                : "text-white"
            }
          `}
          onClick={() => manageState("kill")}
        >
          <GiCurvyKnife />
        </button>
      </div>
    </div>
  );
};

export default Card;
