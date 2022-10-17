import { Cycle } from "../../contexts/CyclesContext";
import { ActionTypes } from "./reducer";

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  };
}

export function stopCycleAction() {
  return {
    type: ActionTypes.STOP_CYCLE,
  };
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.MARK_CYCLE_AS_FINISHED,
  };
}
