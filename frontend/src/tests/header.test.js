import React from 'react';
import { render, screen } from '@testing-library/react'

import App from '../App';

describe("test the header component", () => {
  it("Test if the component contains a 'uControl' text and an image", () => {
    render(<App />);
    const title = screen.getByText(/uControl/i);
    const img = screen.getByRole('img');
    const src = 'http://localhost/logo.gif';

    expect(title).toBeInTheDocument();
    expect(img.src).toBe(src);
  });
});
