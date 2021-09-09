import { render, screen } from '@testing-library/react';
import Timeline from '../components/Timeline';
import 'intersection-observer';

describe('<Timeline />', () => {
  it('Renders without crashing', () => {
    <Timeline />
  })
  it('Renders left project', () => {
    const { getByText } = render(<Timeline />)
    getByText(/LeftProject/);
  })
  it('Renders right project', () => {
    const { getByText } = render(<Timeline />)
    getByText(/RightProject 2/);
  })
})