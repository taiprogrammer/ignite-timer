import { produce } from "immer";

import { Cycle } from "../../contexts/CyclesContext";

interface CyclesState {
  cycles: Cycle[];
  activeCycleId: string | null;
}

export enum ActionTypes {
  ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
  STOP_CYCLE = "STOP_CYCLE",
  MARK_CYCLE_AS_FINISHED = "MARK_CYCLE_AS_FINISHED",
}

export function cyclesReducers(state: CyclesState, action: any) {
  if (action.type === ActionTypes.ADD_NEW_CYCLE) {
    return produce(state, (draft) => {
      draft.cycles.push(action.payload.newCycle);
      draft.activeCycleId = action.payload.newCycle.id;
    });
  }

  if (action.type === ActionTypes.STOP_CYCLE) {
    const currentCycleIndex = state.cycles.findIndex((cycle) => {
      return cycle.id === state.activeCycleId;
    });

    return produce(state, (draft) => {
      if (currentCycleIndex < 0) {
        return state;
      }
      draft.activeCycleId = null;
      draft.cycles[currentCycleIndex].interruptedDate = new Date();
    });
  }

  if (action.type === ActionTypes.MARK_CYCLE_AS_FINISHED) {
    const currentCycleIndex = state.cycles.findIndex((cycle) => {
      return cycle.id === state.activeCycleId;
    });

    return produce(state, (draft) => {
      if (currentCycleIndex < 0) {
        return state;
      }
      draft.activeCycleId = null;
      draft.cycles[currentCycleIndex].finishedDate = new Date();
    });
  }
  return state;
}
