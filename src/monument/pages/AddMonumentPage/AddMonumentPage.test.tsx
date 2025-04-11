import { render, screen } from "@testing-library/react";
import AddMonumentPage from "./AddMonumentPage";

describe("Given the AddMonumentPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Add monument' inside a heading", () => {
      render(<AddMonumentPage />);

      const pageTitle = screen.getByRole("heading", { name: /add monument/i });

      expect(pageTitle).toBeVisible();
    });

    test("Then it should show 'Introduce monument data' inside a heading", () => {
      render(<AddMonumentPage />);

      const formTitle = screen.getByRole("heading", {
        name: /introduce monument data/i,
      });

      expect(formTitle).toBeVisible();
    });
  });
});
