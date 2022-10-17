import { Cycle } from "../contexts/CyclesContext";

interface CyclesState {
    cycles: Cycle[];
    activeCycleId: string | null;
  }

export enum ActionTypes {
    ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
    STOP_CYCLE = 'STOP_CYCLE',
    MARK_CYCLE_AS_FINISHED = 'MARK_CYCLE_AS_FINISHED'
}

export function cyclesReducers(state: CyclesState, action: any) {
    if (action.type === ActionTypes.ADD_NEW_CYCLE) {
      return {
        ...state,
        cycles: [...state.cycles, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id,
      };
    }

    if (action.type === ActionTypes.STOP_CYCLE) {
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

    if (action.type === ActionTypes.MARK_CYCLE_AS_FINISHED) {
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
  }