import { createContext, ReactNode, useState } from "react";

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
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [cycles, setCycles] = useState<Cycle[]>([]);

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  function setDifferenceSecondsAmount(difference: number) {
    setAmountSecondsPassed(difference);
  }

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );

    setActiveCycleId((state) => {
      return (state = null);
    });
  }

  function createNewCycle(data: CreateCycleData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    setCycles((state) => [...state, newCycle]);
    setActiveCycleId(newCycle.id);
    setAmountSecondsPassed(0);
  }

  function stopCycle() {
    setCycles(
      cycles.map((cycle) => {
        if (cycle === activeCycle) {
          return { ...cycle, interruptedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );
    setActiveCycleId(null);
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
