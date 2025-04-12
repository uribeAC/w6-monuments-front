import { render, screen } from "@testing-library/react";
import MonumentForm from "./MonumentForm";

describe("Given the MonumentForm component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Introduce monument data' inside a heading", () => {
      render(<MonumentForm action={() => {}} />);

      const formTitle = screen.getByRole("heading", {
        name: /introduce monument data/i,
      });

      expect(formTitle).toBeVisible();
    });

    test("Then it should show an input for Name", () => {
      render(<MonumentForm action={() => {}} />);

      const inputName = screen.getByLabelText(/name/i);

      expect(inputName).toBeVisible();
    });

    test("Then it should show an input for Description", () => {
      render(<MonumentForm action={() => {}} />);

      const inputDescription = screen.getByLabelText(/description/i);

      expect(inputDescription).toBeVisible();
    });

    test("Then it should 'Register' inside a button", () => {
      render(<MonumentForm action={() => {}} />);

      const buttonText = screen.getByRole("button", { name: /register/i });

      expect(buttonText).toBeVisible();
    });
  });
});
