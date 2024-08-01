import React from "react";

interface Props {
  label: string
}

const Tooltip: React.FC<Props> = ({ label }) => (
  <div
    className='absolute bottom-full mb-2 w-32 p-2 bg-customPurple text-white text-center text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300'
  >
    {label}
  </div>
)

export default Tooltip;
