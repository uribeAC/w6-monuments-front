import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { MemoryRouter } from "react-router";

describe("Given the Navigation component", () => {
  describe("When it renders", () => {
    test("Then it should show a 'Monuments' link and a 'Add Monument' link", () => {
      render(
        <MemoryRouter>
          <Navigation />
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
