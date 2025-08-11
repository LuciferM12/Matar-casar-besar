import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

interface GlobalContextType {
  elections: PossibleActions;
  setElections: React.Dispatch<React.SetStateAction<PossibleActions>>;
  options: number[];
  data: any[];
  generateNew: () => void;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: () => void;
}

export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined
);

export interface PossibleActions {
  kissed: number | null;
  married: number | null;
  killed: number | null;
}

const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [options, setOptions] = useState<number[]>([]);
  const [elections, setElections] = useState<PossibleActions>({
    kissed: null,
    married: null,
    killed: null,
  });
  const [data, setData] = useState<any[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const generateRandoms = (
    min: number,
    max: number,
    count: number
  ): number[] => {
    const numbers = new Set<number>();
    while (numbers.size < count) {
      const number = Math.floor(Math.random() * (max - min + 1)) + min;
      numbers.add(number);
    }
    return Array.from(numbers);
  };

  const generateNew = () => {
    const randomNumbers = generateRandoms(1, 101, 3);
    setOptions(randomNumbers);
    setElections({
      kissed: null,
      married: null,
      killed: null,
    });
  };

  const openModal = () => {
    setOpen(true);
  };

  useEffect(() => {
    generateNew();
  }, []);

  useEffect(() => {
    if (options.length === 3 && options.every((n) => n !== undefined)) {
      const fetchData = async () => {
        try {
          const response = await Promise.all(
            options.map((option) =>
              axios.get(`https://fake-api-act-2.vercel.app/actores/${option}`)
            )
          );
          const data = response.map((res) => res.data);
          setData(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }
  }, [options]);

  const contextValue = {
    elections,
    setElections,
    options,
    data,
    generateNew,
    open,
    setOpen,
    openModal,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
