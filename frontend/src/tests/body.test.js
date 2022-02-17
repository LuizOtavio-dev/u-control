import React from 'react';
import { render, screen } from '@testing-library/react'

import App from '../App';

describe("test the body component", () => {
  it("Test if the component contains a 'Com organização e tempo' text", () => {
    render(<App />);
    const title = screen.getByText(/Com organização e tempo/i);

    expect(title).toBeInTheDocument();
  });

  it("tests if the component contains a form, an input and a button", () => {
    render(<App />);
    const form = screen.getByRole('form');
    const input = screen.getAllByPlaceholderText(/Adicione uma tarefa/i);
    const button = screen.getAllByRole('button')

    expect(form).toBeInTheDocument();
    expect(input.type).toBe("text");
    expect(button).toBeInTheDocument();
  })
});
