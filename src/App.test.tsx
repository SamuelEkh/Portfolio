import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import 'intersection-observer';
import { utimes } from 'fs';



describe('Testing <App />', () => {
  it('renders without crashing', () => {
    render(<App />);
  })
})
