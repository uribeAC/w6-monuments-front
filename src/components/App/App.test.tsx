import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router";

describe("Given the App component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Monuments' inside a level 1 heading'", () => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      );

      const appTitle = screen.queryByRole("heading", {
        name: /monuments/i,
        level: 1,
      });

      expect(appTitle).toBeVisible();
    });
  });
});
