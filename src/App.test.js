import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import App from "./App";
import ContactForm from "./components/ContactForm";
import { act } from "react-dom/test-utils";

test("renders App without crashing", () => {
  render(<App />);
});

test("renders form from ContactForm component", () => {
  render(<ContactForm />);
});

test("renders all form inputs", async() => {
  //Arrange: render component
  act(() => {
    render(<ContactForm />);
  });

  //Act: get access to the element(s) in the component
  const firstNameInput = screen.getByTestId('firstname');
  const lastNameInput = screen.getByTestId('lastname');
  const emailInput = screen.getByTestId('email');
  const messageInput = screen.getByTestId('message');
  const submitButton = screen.getByTestId('submit');

  fireEvent.change(firstNameInput, {target: {name: 'firstName', value: 'Joe'}});
  fireEvent.change(lastNameInput, {target: {name: 'lastName', value: 'Jones'}});
  fireEvent.change(emailInput, {target: {name: 'email', value: 'joe@example.com'}});
  fireEvent.change(messageInput, {target: {name: 'message', value: 'This is a test.'}});
  fireEvent.click(submitButton);

  //Assert: passes test if the element(s) exist in the component
  expect(firstNameInput).toBeInTheDocument();
  expect(firstNameInput).toBe(3);
  expect(lastNameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(messageInput).toBeInTheDocument();
})
