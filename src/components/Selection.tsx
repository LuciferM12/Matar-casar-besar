import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Card from "./Card";

const Selection = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "GlobalContext is undefined. Make sure your component is wrapped in a GlobalContext.Provider."
    );
  }
  const { data } = context;
  return (
    <section className="w-11/12 flex mt-12 justify-evenly flex-wrap">
      {data.map((item, index) => {
        return (
          <Card
            title={item.title}
            imageUrl={item.imageUrl}
            value={item.value}
            age={item.age}
            key={index}
          />
        );
      })}
    </section>
  );
};

export default Selection;
