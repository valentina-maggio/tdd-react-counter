import React from 'react';
import Counter from '../Counter';
import { render, screen, fireEvent } from '@testing-library/react';
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

test('subtract button renders with +', () => {
  render(<Counter />);
  const subtractBtn = screen.getByTestId('subtract-btn');

  expect(subtractBtn.textContent).toBe('-');
});

test('input contains initial value of 1', () => {
  render(<Counter />);
  const inputEl = screen.getByTestId('input');

  expect(inputEl.value).toBe('1');
});

test('change value of input works correctly', () => {
  render(<Counter />);
  const inputEl = screen.getByTestId('input');

  fireEvent.change(inputEl, {
    target: {
      value: '5'
    }
  })

  expect(inputEl.value).toBe('5');
});

test('click on plus button adds 1 to the counter', () => {
  render(<Counter />);
  const addBtnEl = screen.getByTestId('add-btn');
  const counterEl = screen.getByTestId('counter');

  fireEvent.click(addBtnEl);

  expect(counterEl.textContent).toBe('1');
});

test('click on minus button subtracts 1 from the counter', () => {
  render(<Counter />);
  const subtractBtnEl = screen.getByTestId('subtract-btn');
  const counterEl = screen.getByTestId('counter');

  fireEvent.click(subtractBtnEl);

  expect(counterEl.textContent).toBe('-1');
});

test('changing input value then clicking on plus button works correctly', () => {
  render(<Counter />);
  const addBtnEl = screen.getByTestId('add-btn');
  const counterEl = screen.getByTestId('counter');
  const inputEl = screen.getByTestId('input');

  fireEvent.change(inputEl, {
    target: {
      value: '5'
    }
  })

  fireEvent.click(addBtnEl);

  expect(counterEl.textContent).toBe('5');
});