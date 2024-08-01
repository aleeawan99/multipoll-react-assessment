import React, { useEffect, useState } from "react"

import Dots from "./Dots";
import Summary from "./Summary";
import Tooltip from "../Tooltip";
import { Step } from "../../data/steps";
import { useAppDispatch } from "../../hooks";
import Logo from "../../assets/logo/logo.svg";
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

  return (
    <div className='h-screen w-screen grid grid-cols-2'>
      <img src={Logo} alt="Logo" className="absolute top-0 h-8 m-4" />
      <div className='flex items-center pl-5 bg-customPurple'>
        <Dots currentStep={currentStep} totalSteps={steps.length} />
        <div className='text-white m-8'>
          <h1
            className={`xs:text-3xl sm:text-3xl md:text-6xl lg:text-6xl font-semibold ${animate ? (currentStep === steps.length - 1) ? 'animate-slideRight' : 'animate-slideUp' : ''}`}
          >
            {steps[currentStep].title}
          </h1>
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
              className='sm:w-24 md:w-32 lg:w-32 w-32 hover:translate-y-2 transition-transform cursor-pointer'
              src={require(`../../assets/icons/${option.icon}`)}
              alt={option.label}
            />
            <Tooltip label={option.label} />
          </div>
        ))}
        {currentStep === steps.length - 1 && <Summary steps={steps} />}
      </div>
    </div>
  )
}

export default Carousel;
