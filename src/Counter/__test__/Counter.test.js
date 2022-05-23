import React from 'react';
import Counter from '../Counter';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('header render with correct text', () => {
  render(<Counter />);
  const headerEl = screen.getByTestId('header');

  expect(headerEl.textContent).toBe('My Counter');
});

test('counter initially starts with text of 0', () => {
  render(<Counter />);
  const counterEl = screen.getByTestId('counter');

  expect(counterEl.textContent).toBe('0');
});

test('add button renders with +', () => {
  render(<Counter />);
  const addBtn = screen.getByTestId('add-btn');

  expect(addBtn.textContent).toBe('+');
});
