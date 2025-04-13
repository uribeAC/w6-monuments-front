import { render, screen } from "@testing-library/react";
import MonumentForm from "./MonumentForm";
import { MemoryRouter } from "react-router";
import MonumentsContextProvider from "../../context/MonumentsContextProvider";

describe("Given the MonumentForm component", () => {
  describe("When it renders", () => {
    const action = vitest.fn();

    test("Then it should show 'Introduce monument data' inside a heading", () => {
      render(
        <MonumentsContextProvider>
          <MemoryRouter>
            <MonumentForm action={action} />
          </MemoryRouter>
        </MonumentsContextProvider>,
      );

      const formTitle = screen.getByRole("heading", {
        name: /introduce monument data/i,
      });

      expect(formTitle).toBeVisible();
    });

    test("Then it should show an input for Name", () => {
      render(
        <MonumentsContextProvider>
          <MemoryRouter>
            <MonumentForm action={action} />
          </MemoryRouter>
        </MonumentsContextProvider>,
      );

      const inputName = screen.getByLabelText(/name/i);

      expect(inputName).toBeVisible();
    });

    test("Then it should show an input for Description", () => {
      render(
        <MonumentsContextProvider>
          <MemoryRouter>
            <MonumentForm action={action} />
          </MemoryRouter>
        </MonumentsContextProvider>,
      );

      const inputDescription = screen.getByLabelText(/description/i);

      expect(inputDescription).toBeVisible();
    });

    test("Then it should 'Register' inside a button", () => {
      render(
        <MonumentsContextProvider>
          <MemoryRouter>
            <MonumentForm action={action} />
          </MemoryRouter>
        </MonumentsContextProvider>,
      );

      const buttonText = screen.getByRole("button", { name: /register/i });

      expect(buttonText).toBeVisible();
    });
  });
});
