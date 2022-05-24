import React from 'react';
import Counter from '../Counter';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


let getByTestId;

beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  const view = render(<Counter />);
  getByTestId = view.getByTestId;
});

test('header render with correct text', () => {
  const headerEl = screen.getByTestId('header');

  expect(headerEl.textContent).toBe('My Counter');
});

test('counter initially starts with text of 0', () => {
  const counterEl = screen.getByTestId('counter');

  expect(counterEl.textContent).toBe('0');
});

test('add button renders with +', () => {
  const addBtn = screen.getByTestId('add-btn');

  expect(addBtn.textContent).toBe('+');
});

test('subtract button renders with +', () => {
  const subtractBtn = screen.getByTestId('subtract-btn');

  expect(subtractBtn.textContent).toBe('-');
});

test('input contains initial value of 1', () => {
  const inputEl = screen.getByTestId('input');

  expect(inputEl.value).toBe('1');
});

test('change value of input works correctly', () => {
  const inputEl = screen.getByTestId('input');

  fireEvent.change(inputEl, {
    target: {
      value: '5'
    }
  })

  expect(inputEl.value).toBe('5');
});

test('click on plus button adds 1 to the counter', () => {
  const addBtnEl = screen.getByTestId('add-btn');
  const counterEl = screen.getByTestId('counter');

  fireEvent.click(addBtnEl);

  expect(counterEl.textContent).toBe('1');
});

test('click on minus button subtracts 1 from the counter', () => {
  const subtractBtnEl = screen.getByTestId('subtract-btn');
  const counterEl = screen.getByTestId('counter');

  fireEvent.click(subtractBtnEl);

  expect(counterEl.textContent).toBe('-1');
});

test('changing input value then clicking on plus button works correctly', () => {
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

test('adding and then subtracting leads to the correct counter number', () => {
  const subtractBtnEl = screen.getByTestId('subtract-btn');
  const addBtnEl = screen.getByTestId('add-btn');
  const counterEl = screen.getByTestId('counter');
  const inputEl = screen.getByTestId('input');

  fireEvent.change(inputEl, {
    target: {
      value: '10'
    }
  });

  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);

  expect(counterEl.textContent).toBe('20');
})

test('a series of multiple adds and subtracts leads to the correct counter number', () => {
  const subtractBtnEl = screen.getByTestId('subtract-btn');
  const addBtnEl = screen.getByTestId('add-btn');
  const counterEl = screen.getByTestId('counter');
  const inputEl = screen.getByTestId('input');

  fireEvent.change(inputEl, {
    target: {
      value: '10'
    }
  });

  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);

  fireEvent.change(inputEl, {
    target: {
      value: '5'
    }
  });

  fireEvent.click(addBtnEl);
  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);

  expect(counterEl.textContent).toBe('15');
});

test('counter contains correct className', () => {
  const counterEl = screen.getByTestId('counter');
  const subtractBtnEl = screen.getByTestId('subtract-btn');
  const addBtnEl = screen.getByTestId('add-btn');
  const inputEl = screen.getByTestId('input');

  fireEvent.change(inputEl, {
    target: {
      value: '50'
    }
  });

  fireEvent.click(addBtnEl);

  expect(counterEl.className).toBe('');

  fireEvent.click(addBtnEl);

  expect(counterEl.className).toBe('green');

  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);

  expect(counterEl.className).toBe('');

  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);

  expect(counterEl.className).toBe('red');
});
