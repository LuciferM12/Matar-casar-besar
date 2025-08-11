import { createContext } from "react";

export interface PossibleActions {
  kissed: number | null;
  married: number | null;
  killed: number | null;
}

export interface GlobalContextType {
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
