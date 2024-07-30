export interface Option {
  icon: string;
  label: string;
}

export interface Step {
  title: string;
  options: Option[];
}

export const steps: Step[] = [
  {
    title: "How was your week overall?",
    options: [
      { icon: "thumbs-up.svg", label: "Good" },
      { icon: "thinking-face.svg", label: "Average" },
      { icon: "thumbs-down.svg", label: "Bad" },
    ],
  },
  {
    title: "How was your journey?",
    options: [
      { icon: "thumbs-up.svg", label: "Good" },
      { icon: "thinking-face.svg", label: "Average" },
      { icon: "thumbs-down.svg", label: "Bad" },
    ],
  },
  {
    title: "How was your last project?",
    options: [
      { icon: "thumbs-up.svg", label: "Good" },
      { icon: "thinking-face.svg", label: "Average" },
      { icon: "thumbs-down.svg", label: "Bad" },
    ],
  },
  // Add more steps as needed
  {
    title: "Summary",
    options: [], // No options for summary step
  },
];
