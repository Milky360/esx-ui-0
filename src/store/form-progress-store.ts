import { create } from "zustand";

export type SubStepType = {
  title: string;
  href: string;
  completed: boolean;
};

export type RegistrationStepType = {
  title: string;
  completed: boolean;
  subSteps: SubStepType[];
  content: React.ReactNode;
};

export type FormProgressStoreType = {
  steps: RegistrationStepType[];
  currentMainStep: number;
  currentSubStep: number;
};

export type FormProgressStoreActions = {
  updateFormProgressStoreField: (
    field: keyof FormProgressStoreType,
    value: number | RegistrationStepType[]
  ) => void;
  completeMainStep: (mainStepIndex: number) => void;
};

export const useFormProgressStore = create<
  FormProgressStoreType & FormProgressStoreActions
>()((set) => ({
  steps: [],
  currentMainStep: 0,
  currentSubStep: 0,

  updateFormProgressStoreField: (field, value) =>
    set((state) => ({ ...state, [field]: value })),

  completeMainStep: (mainStepIndex) =>
    set((state) => {
      const updatedSteps = [...state.steps];
      updatedSteps[mainStepIndex].completed = true;
      updatedSteps[mainStepIndex].subSteps = updatedSteps[
        mainStepIndex
      ].subSteps.map((subStep) => ({
        ...subStep,
        completed: true,
      }));
      return { steps: updatedSteps };
    }),
}));
