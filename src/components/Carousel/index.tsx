import React, { useEffect, useState } from "react"

import Dots from "./Dots";
import Summary from "../Summary";
import { Step } from "../../data/steps";
import { useAppDispatch } from "../../hooks";
import { setSelectedOption } from "../../reducers/multipollSlice";

interface Props {
  steps: Step[]
}

const Carousel: React.FC<Props> = ({ steps }) => {
  const dispatch = useAppDispatch();
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [animate, setAnimate] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setAnimate(false), 500);
  }, [animate]);

  const handleOptionClick = (stepIndex: number, optionIndex: number) => {
    dispatch(setSelectedOption({ stepIndex, optionIndex }))
    setCurrentStep(currentStep + 1)
    setAnimate(true);
  }

  const tooltipClasses: string = 'absolute bottom-full mb-2 w-32 p-2 bg-customPurple text-white text-center text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300';

  return (
    <div className='h-screen w-screen grid grid-cols-2'>
      <div className='flex items-center pl-5 bg-customPurple'>
        <Dots currentStep={currentStep} totalSteps={steps.length} />
        <div className='text-white m-8'>
          <h1 className={`text-6xl font-semibold ${animate ? 'animate-slideUp' : ''}`}>{steps[currentStep].title}</h1>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        {steps[currentStep].options.map((option, optIndex) => (
          <div
            key={optIndex}
            className={`relative group ${animate ? 'animate-slideUp' : ''}`}
            onClick={() => handleOptionClick(currentStep, optIndex)}
          >
            <img
              className='w-32 hover:translate-y-2 transition-transform cursor-pointer'
              src={require(`../../assets/icons/${option.icon}`)}
              alt={option.label}
            />
            <div className={tooltipClasses}>{option.label}</div>
          </div>
        ))}
        {currentStep === steps.length - 1 && <Summary steps={steps} />}
      </div>
    </div>
  )
}

export default Carousel;
