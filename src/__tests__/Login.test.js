import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Login from "components/Login/Login";

describe("Login", () => {
  it("should render", () => {
    const { container } = render(<Login />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should call handle submit", () => {
    const handleSubmit = jest.fn();
    const { container } = render(<Login handleSubmit={handleSubmit} />);
    const form = container.querySelector("form");
    fireEvent.submit(form);
    expect(handleSubmit).toHaveBeenCalled();
  });
});
