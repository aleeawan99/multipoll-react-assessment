import React, { act } from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';
import { steps } from './data/steps';

test('renders without crashing', () => {
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    render(<App />);
  });
  const stepTitle = screen.getByText(steps[0].title);
  expect(stepTitle).toBeInTheDocument();
});
