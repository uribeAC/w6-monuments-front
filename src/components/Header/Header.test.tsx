import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Monuments' inside a level 1 heading", () => {
      render(<Header />);

      const appTitle = screen.queryByRole("heading", {
        name: /monuments/i,
        level: 1,
      });

      expect(appTitle).toBeVisible();
    });

    test("Then it should show a 'Monuments' link and a 'Add Monument' link", () => {
      render(<Header />);

      const monumentsPageLink = screen.queryByRole("link", {
        name: /monuments/i,
      });
      const addMonumentPageLink = screen.queryByRole("link", {
        name: /add monument/i,
      });

      expect(monumentsPageLink).toBeVisible();
      expect(addMonumentPageLink).toBeVisible();
    });
  });
});
