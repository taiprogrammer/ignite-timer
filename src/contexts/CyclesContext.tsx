import { createContext, ReactNode, useReducer, useState } from "react";

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

interface CyclesState {
  cycles: Cycle[];
  activeCycleId: string | null;
}

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);
  const [cyclesState, dispatch] = useReducer(
    (state: CyclesState, action: any) => {
      if (action.type === "ADD_NEW_CYCLE") {
        return {
          ...state,
          cycles: [...state.cycles, action.payload.newCycle],
          activeCycleId: action.payload.newCycle.id,
        };
      }

      if (action.type === "STOP_CYCLE") {
        return {
          ...state,
          cycles: state.cycles.map((cycle) => {
            if (cycle.id === state.activeCycleId) {
              return { ...cycle, interruptedDate: new Date() };
            } else {
              return cycle;
            }
          }),
          activeCycleId: null,
        };
      }

      if (action.type === "MARK_CYCLE_AS_FINISHED") {
        return {
          ...state,
          cycles: state.cycles.map((cycle) => {
            if (cycle.id === state.activeCycleId) {
              return { ...cycle, finishedDate: new Date() };
            } else {
              return cycle;
            }
          }),
          activeCycleId: null,
        };
      }
      return state;
    },
    {
      cycles: [],
      activeCycleId: null,
    }
  );

  const { cycles, activeCycleId } = cyclesState;

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  function setDifferenceSecondsAmount(difference: number) {
    setAmountSecondsPassed(difference);
  }

  function markCurrentCycleAsFinished() {
    dispatch({
      type: "MARK_CYCLE_AS_FINISHED",
      payload: {
        activeCycleId,
      },
    });
  }

  function createNewCycle(data: CreateCycleData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    dispatch({
      type: "ADD_NEW_CYCLE",
      payload: {
        newCycle,
      },
    });
    setAmountSecondsPassed(0);
  }

  function stopCycle() {
    dispatch({
      type: "STOP_CYCLE",
      payload: {
        activeCycleId,
      },
    });
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
