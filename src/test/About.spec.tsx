import { render, screen } from '@testing-library/react';
import About from '../components/About';

describe('<About />', () => {
  it('Renders without crashing', () => {
    render(<About />)
  })
})