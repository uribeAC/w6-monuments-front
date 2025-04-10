import { render, screen } from "@testing-library/react";
import { sensojiTemple } from "../../fixtures";
import MonumentCard from "./MonumentCard";

describe("Given the MonumentCard component", () => {
  describe("When it receives Senso-ji Temple", () => {
    test("Then it should show 'Senso-ji Temple' inside a heading", () => {
      render(<MonumentCard monument={sensojiTemple} />);

      const monumentName = screen.getByRole("heading", {
        name: /Templo Sensō-ji/i,
      });

      expect(monumentName).toBeVisible();
    });

    test("Then it should show an image of Templo Sensō-ji", () => {
      render(<MonumentCard monument={sensojiTemple} />);

      const monumentImage = screen.getByAltText(sensojiTemple.alternativeText);

      expect(monumentImage).toBeVisible();
    });
  });
});
