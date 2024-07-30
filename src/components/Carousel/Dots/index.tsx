import React from 'react';

interface Props {
  currentStep: number;
  totalSteps: number;
}

const activeDot = 'border border-white border-solid border-2 bg-transparent';

const Dots: React.FC<Props> = ({ currentStep, totalSteps }) => (
  <div className='flex flex-col align-center justify-center gap-2'>
    {Array(totalSteps).fill('').map((e, i) => (
      <div
        key={i}
        className={`w-[15px] h-[15px] rounded-full transition-bg duration-500 ${i === currentStep ? activeDot : 'bg-white'}`}
      />
    ))}
  </div>
);

export default Dots;