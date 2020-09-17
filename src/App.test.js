import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

test("renders form from ContactForm component", () => {
  const formWrapper = render(<ContactForm />);
});

test("renders all form inputs", async() => {
  const formWrapper = render(<ContactForm />);
  const firstname = formWrapper.getByText(/first name/i);
  const lastname = formWrapper.getByText(/last name/i);
  const email = formWrapper.getByText(/email/i);
  const message = formWrapper.getByText(/message/i);
  fireEvent.click(screen.getByPlaceholderText(/submit/i));
  const input = await waitFor(() => formWrapper.getByPlaceholderText(/submit/i));
  expect(firstname).toBeInTheDocument();
  expect(lastname).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(message).toBeInTheDocument();
  expect(input).toBeInTheDocument();
})
