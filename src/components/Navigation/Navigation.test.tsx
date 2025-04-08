import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Given the Navigation component", () => {
  describe("When it renders", () => {
    test("Then it should show a 'Monuments' link and a 'Add Monument' link", () => {
      render(<Navigation />);

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
