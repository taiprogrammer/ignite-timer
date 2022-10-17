import { createContext, ReactNode, useReducer, useState } from "react";
import {
  addNewCycleAction,
  markCurrentCycleAsFinishedAction,
  stopCycleAction,
} from "../reducers/cycles/actions";
import { cyclesReducers } from "../reducers/cycles/reducer";

interface CyclesContextType {
  cycles: Cycle[];
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  markCurrentCycleAsFinished: () => void;
  amountSecondsPassed: number;
  setDifferenceSecondsAmount: (difference: number) => void;
  createNewCycle: (data: CreateCycleData) => void;
  stopCycle: () => void;
}

export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface CreateCycleData {
  task: string;
  minutesAmount: number;
}

export const CyclesContext = createContext({} as CyclesContextType);

interface CyclesContextProviderProps {
  children: ReactNode;
}

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);
  const [cyclesState, dispatch] = useReducer(cyclesReducers, {
    cycles: [],
    activeCycleId: null,
  });

  const { cycles, activeCycleId } = cyclesState;

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  function setDifferenceSecondsAmount(difference: number) {
    setAmountSecondsPassed(difference);
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction());
  }

  function createNewCycle(data: CreateCycleData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    dispatch(addNewCycleAction(newCycle));
    setAmountSecondsPassed(0);
  }

  function stopCycle() {
    dispatch(stopCycleAction());
    setAmountSecondsPassed(0);
    document.title = "Ignite Timer";
  }
  return (
    <CyclesContext.Provider
      value={{
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setDifferenceSecondsAmount,
        createNewCycle,
        stopCycle,
        cycles,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}
