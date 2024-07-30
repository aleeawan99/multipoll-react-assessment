import React, { useEffect } from "react";

import { Step } from "../../data/steps";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { submitMultipollData } from "../../reducers/multipollSlice";
import { RootState } from "../../store";

interface Props {
  steps: Step[];
}

const Summary: React.FC<Props> = ({ steps }) => {
  const dispatch = useAppDispatch();
  const { selectedOptions, status, error } = useAppSelector((state: RootState) => state.multipoll);

  useEffect(() => {
    const selectedData = steps.slice(0, -1).map((step, i) => ({
      question: step.title,
      answer: step.options[selectedOptions[i]].label,
    }));
    dispatch(submitMultipollData(selectedData));
  }, [dispatch, selectedOptions, steps])

  return (
    <div className='animate-slideLeft'>
      {steps.slice(0, -1).map((step, i) => (
        <div
          key={i}
          className={`relative group`}
        >
          <h1 className={`text-3xl font-semibold`}>{step.title}</h1>
          <div className="flex gap-2 items-center">
            <div>{step.options[selectedOptions[i]].label}</div>
            <img
              className='w-12'
              src={require(`../../assets/icons/${step.options[selectedOptions[i]].icon}`)}
              alt={step.options[selectedOptions[i]].label}
            />
          </div>
        </div>
      ))}
      {status === 'failed' && <p>Error: {error}</p>}
    </div>
  )
}

export default Summary;
