import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';



test("it should have an search input", () => {
  render(<App />)
  const inputELement = screen.getByTestId("search-pokemon");
  expect(inputELement).toBeInTheDocument()
})

test("it should have a table", () => {
  render(<App />)
  const inputELement = screen.getByTestId("pokemon-table");
  expect(inputELement).toBeInTheDocument()
})
test ("it should exist new btn", () => {
  render(<App />)
  const newBtn = screen.getByTestId("new-pokemon")
  expect(newBtn).toBeInTheDocument()
})
test("it should have a form to create new pokemons",async ()=> {
  render(<App />)
  const newBtn = screen.getByTestId("new-pokemon")

  userEvent.click(newBtn);
  setTimeout(() => {
    const formElement = screen.getByTestId("pokemon-form");
    expect(formElement).toHaveFormValues({
      name: "",
      image: "",
      attack: 0,
      defense: 0
    })
  }, 2000)

})

