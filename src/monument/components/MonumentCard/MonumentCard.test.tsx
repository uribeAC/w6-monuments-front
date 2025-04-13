import { render, screen } from "@testing-library/react";
import { sensojiTemple } from "../../fixtures";
import MonumentCard from "./MonumentCard";
import MonumentsContextProvider from "../../context/MonumentsContextProvider";

describe("Given the MonumentCard component", () => {
  describe("When it receives Senso-ji Temple", () => {
    test("Then it should show 'Senso-ji Temple' inside a heading", () => {
      render(<MonumentCard monument={sensojiTemple} />, {
        wrapper: MonumentsContextProvider,
      });

      const monumentName = screen.getByRole("heading", {
        name: /Templo Sensō-ji/i,
      });

      expect(monumentName).toBeVisible();
    });

    test("Then it should show an image of Templo Sensō-ji", () => {
      render(<MonumentCard monument={sensojiTemple} />, {
        wrapper: MonumentsContextProvider,
      });

      const monumentImage = screen.getByAltText(sensojiTemple.alternativeText);

      expect(monumentImage).toBeVisible();
    });

    test("Then it should show a 'X' button", () => {
      render(<MonumentCard monument={sensojiTemple} />, {
        wrapper: MonumentsContextProvider,
      });

      const deleteButton = screen.getByRole("button", { name: "X" });

      expect(deleteButton).toBeVisible();
    });
  });
});
