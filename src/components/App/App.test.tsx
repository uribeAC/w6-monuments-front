import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router";

describe("Given the App component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Monuments' inside a level 1 heading'", () => {
      render(<App />, { wrapper: MemoryRouter });

      const appTitle = screen.getByRole("heading", {
        name: /monuments/i,
        level: 1,
      });

      expect(appTitle).toBeVisible();
    });
  });
});
