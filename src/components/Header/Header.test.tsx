import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from "react-router";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Monuments' inside a level 1 heading", () => {
      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
      );

      const appTitle = screen.getByRole("heading", {
        name: /monuments/i,
        level: 1,
      });

      expect(appTitle).toBeVisible();
    });

    test("Then it should show a 'Monuments' link and a 'Add Monument' link", () => {
      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
      );

      const monumentsPageLink = screen.getByRole("link", {
        name: /monuments/i,
      });
      const addMonumentPageLink = screen.getByRole("link", {
        name: /add monument/i,
      });

      expect(monumentsPageLink).toBeVisible();
      expect(addMonumentPageLink).toBeVisible();
    });
  });
});
