import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Carousel from '../Carousel';
import { steps } from '../../data/steps';
import { renderWithProviders } from '../../utils/test-utils'

describe('Carousel Component', () => {
  it('Renders without crashing', () => {
    renderWithProviders(<Carousel steps={steps} />);
    expect(screen.getByText(steps[0].title)).toBeInTheDocument();
  });

  it('Navigates to the next step', () => {
    renderWithProviders(<Carousel steps={steps} />)
    userEvent.click(screen.getByAltText(steps[0].options[0].label))
    const stepTitle = screen.getByText(steps[1].title);
    expect(stepTitle).toBeInTheDocument();
  });

  it('Selects an option', () => {
    renderWithProviders(<Carousel steps={steps} />)
    userEvent.click(screen.getAllByRole('img')[1])
    const stepTitle = screen.getByText(steps[1].title);
    expect(stepTitle).toBeInTheDocument();
  });

  it('Submits the poll', async () => {
    renderWithProviders(<Carousel steps={steps} />)

    for (let i = 0; i < steps.length - 1; i++) {
      const randm: number = Math.floor(Math.random() * 3) // Returns a random integer from 0 to 3
      userEvent.click(screen.getAllByRole('img')[randm]) // Navigate to Step 2,3
    }

    await waitFor(() => expect(screen.queryByText('Error:')).toBeNull());
  });
});
