import React from 'react';
import { render, screen } from '@testing-library/react';
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

test("it should have a form to create new pokemons",()=> {
  render(<App />)

  const formElement = screen.getByTestId("pokemon-form");
  expect(formElement).toHaveFormValues({
    name: "",
    image: "",
    attack: 0,
    defense: 0
  })
})

test("it should create a new pokemon", () => {

const nameEl = screen.getByTestId("name");
const imageEl = screen.getByTestId("image");
const attackEL =  screen.getByTestId("attack");
const defenseEL = screen.getByTestId("defense");

userEvent.type(nameEl, "pikachu");
userEvent.type(imageEl, "https://en.wikipedia.org/wiki/Pikachu#/media/File:Pok%C3%A9mon_Pikachu_art.png");
userEvent.type(attackEL, "80");
userEvent.type(defenseEL, "80");

const submitEl  =  screen.getByTestId("submit-btn");
userEvent.click(submitEl);
expect(screen.getByTestId("pikachu")).toBeInTheDocument();

})