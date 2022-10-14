import * as zod from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { HandPalm, Play } from "phosphor-react";

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from "./styles";
import { useContext } from "react";
import { Countdown } from "./Countdown";
import { NewCycleForm } from "./NewCycleForm";
import { CyclesContext } from "../../contexts/CyclesContext";

export function Home() {
  const { createNewCycle, activeCycle, stopCycle } = useContext(CyclesContext);
  const newCycleFormSchema = zod.object({
    task: zod.string().min(1, "Informe a tarefa."),
    minutesAmount: zod
      .number()
      .min(5, "O ciclo precisa ser de no mínimo 5 minutos")
      .max(60, "O ciclo precisa ser de no máximo 5 minutos"),
  });

  type NewCycleFormData = zod.infer<typeof newCycleFormSchema>;

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  const task = watch("task");
  const minutesAmount = watch("minutesAmount");

  const disabledWhen = !task || !minutesAmount;

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data);
    reset();
  }

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountdownButton onClick={stopCycle}>
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={disabledWhen}>
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  );
}
