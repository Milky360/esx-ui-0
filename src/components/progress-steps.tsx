"use client";

import { Steps } from "antd";
import { FaDotCircle, FaRegDotCircle } from "react-icons/fa";

import { useFormProgressStore } from "@/store/form-progress-store";

export default function ProgressSteps() {
  const {
    steps,
    currentMainStep,
    currentSubStep,
    updateFormProgressStoreField,
    completeMainStep,
  } = useFormProgressStore();

  const onMainStepChange = (mainStepIndex: number) => {
    // Only proceed if moving to the next main step (indicating the current step is complete)
    if (currentMainStep < mainStepIndex) {
      completeMainStep(currentMainStep);
    }

    updateFormProgressStoreField("currentMainStep", mainStepIndex);
    updateFormProgressStoreField("currentSubStep", 0);
  };

  const onSubStepChange = (subStepIndex: number) => {
    updateFormProgressStoreField("currentSubStep", subStepIndex);
  };

  const customDot = (param: any) => {
    return "process" === "process" ? (
      <FaDotCircle style={{ color: "#1890ff" }} />
    ) : (
      <FaRegDotCircle style={{ color: "#8c8c8c" }} />
    );
  };

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Steps
      className="!w-fit"
      direction="vertical"
      current={currentMainStep}
      onChange={(nextStep) => {
        // if (steps[nextStep].completed) {
        onMainStepChange(nextStep);
        // }
      }}
      items={steps.map(({ title, subSteps, completed }, index) => ({
        title,
        status: completed
          ? "finish"
          : currentMainStep === index
            ? "process"
            : "wait",
        description:
          currentMainStep === index ? (
            <Steps
              className="!w-fit"
              direction="vertical"
              current={currentSubStep}
              progressDot={customDot}
              items={subSteps.map(({ title, href, completed }, index) => ({
                title,
                status:
                  currentSubStep === index
                    ? completed
                      ? "finish"
                      : steps[currentMainStep].subSteps[index].title === title
                        ? "process"
                        : "wait"
                    : completed
                      ? "finish"
                      : "wait",
                className: "!h-8 !pl-1",
                onClick: () => {
                  onSubStepChange(index);
                  handleScroll(href);
                },
              }))}
            />
          ) : completed ? (
            <p className="text-green-500">Completed</p>
          ) : null,
      }))}
    />
  );
}
