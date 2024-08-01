import { render, screen } from '@testing-library/react';
import Dots from '../Dots';

describe('Dot Component', () => {
  it('Renders without crashing', () => {
    render(<Dots currentStep={0} totalSteps={3} />);
    expect(screen.getByTestId('Dot-1')).toBeInTheDocument();
  });
});
