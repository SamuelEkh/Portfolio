import { render, screen } from '@testing-library/react';
import Welcome from '../components/Welcome';

describe('<Welcome />', () => {
  it('Renders without crashing', () => {
    <Welcome />
  })
  it('displays correct text', () => {
    const { getByText } = render(<Welcome />);
    getByText(/Hello, my name is Samuel/);
  })
})