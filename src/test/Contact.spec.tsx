import Contact from '../components/Contact';
import { fireEvent, getByTestId, render, screen } from '@testing-library/react';

describe('<Contact />', () => {
  it('renders without crashing', () => {
    render(<Contact />)
  })
  it('changes state in name input', () => {
    render(<Contact />);
    const nameInput = screen.getByTestId('name-input') as HTMLInputElement;
    fireEvent.change(nameInput, {target: {value: 'doe'}});
    expect(nameInput.value).toEqual('doe');
  })
  it('change state in email input', () => {
    render(<Contact />);
    const emailInput = screen.getByTestId('email-input') as HTMLInputElement;
    fireEvent.change(emailInput, {target: {value: 'hello@gmail.com'}});
    expect(emailInput.value).toEqual('hello@gmail.com');
  })
  it('change state in message input', () => {
    render(<Contact />);
    const messageInput = screen.getByTestId('message-input') as HTMLInputElement;
    fireEvent.change(messageInput, {target: {value: 'Hello is this working'}});
    expect(messageInput.value).toEqual('Hello is this working');
  })
})