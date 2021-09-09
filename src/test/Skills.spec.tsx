import { render, screen } from '@testing-library/react';
import Skills from '../components/Skills';

describe('<Skills />', () => {
  it('Renders without crashing', () => {
    render(<Skills />)
  })
})