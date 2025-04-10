import { render, screen } from "@testing-library/react";
import MonumentList from "./MonumentList";
import { himejiCastle, sensojiTemple } from "../../fixtures";

describe("Given the MonumentsList component", () => {
  describe("When it receives Senso-ji Temple and Himeji Castle", () => {
    test("Then it should show the names of Senso-ji Temple and Himeji Castle inside a heading", () => {
      render(<MonumentList monuments={[sensojiTemple, himejiCastle]} />);

      const sensojiName = screen.getByRole("heading", {
        name: sensojiTemple.name,
      });
      const himejiName = screen.getByRole("heading", {
        name: himejiCastle.name,
      });

      expect(sensojiName).toBeVisible();
      expect(himejiName).toBeVisible();
    });
  });
});
