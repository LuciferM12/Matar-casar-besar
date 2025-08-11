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

  const manageState = (action: string) => {
    const { kissed, married, killed } = elections;
    switch (action) {
      case "marry":
        setElections((prev: PossibleActions) => ({
          ...prev,
          married: value,
        }));
        if (kissed === value) {
          setElections((prev: PossibleActions) => ({
            ...prev,
            killed: null,
          }));
        }
        if (killed === value) {
          setElections((prev: PossibleActions) => ({
            ...prev,
            killed: null,
          }));
        }
        break;
      case "kill":
        setElections((prev: PossibleActions) => ({
          ...prev,
          killed: value,
        }));
        if (kissed === value) {
          setElections((prev: PossibleActions) => ({
            ...prev,
            kissed: null,
          }));
        }
        if (married === value) {
          setElections((prev: PossibleActions) => ({
            ...prev,
            married: null,
          }));
        }
        break;
      case "kiss":
        setElections((prev: PossibleActions) => ({
          ...prev,
          kissed: value,
        }));
        if (married === value) {
          setElections((prev: PossibleActions) => ({
            ...prev,
            married: null,
          }));
        }
        if (killed === value) {
          setElections((prev: PossibleActions) => ({
            ...prev,
            killed: null,
          }));
        }
        break;
    }
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
          className={`text-xl ${
            elections.kissed === value
              ? "text-red-300 text-5xl"
              : "text-white text-3xl"
          } w-1/3 bg-transparent border-none flex items-center justify-center p-5 gap-1.5 duration-300 ease-in hover:cursor-pointer ${
            elections.kissed !== value && "scale-125"
          }`}
          onClick={() => manageState("kiss")}
        >
          {" "}
          <FaKissWinkHeart />{" "}
        </button>
        <button
          className={`text-xl ${
            elections.married === value
              ? "text-red-300 text-5xl"
              : "text-white text-3xl"
          } w-1/3 bg-transparent border-none flex items-center justify-center p-5 gap-1.5 duration-300 ease-in hover:cursor-pointer ${
            elections.married !== value && "scale-125"
          }`}
          onClick={() => manageState("marry")}
        >
          {" "}
          <GiBigDiamondRing />{" "}
        </button>
        <button
          className={`text-xl ${
            elections.killed === value
              ? "text-red-300 text-5xl"
              : "text-white text-3xl"
          } w-1/3 bg-transparent border-none flex items-center justify-center p-5 gap-1.5 duration-300 ease-in hover:cursor-pointer ${
            elections.killed !== value && "scale-125"
          }`}
          onClick={() => manageState("kill")}
        >
          {" "}
          <GiCurvyKnife />{" "}
        </button>
      </div>
    </div>
  );
};

export default Card;
