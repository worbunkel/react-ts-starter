import React from 'react';
import { render } from '@testing-library/react';
import { App } from './app';

test('renders at least one div', () => {
  const { getAllByText } = render(<App />);
  expect(getAllByText(/.*/, { selector: 'div' })[0]).toBeInTheDocument();
});
