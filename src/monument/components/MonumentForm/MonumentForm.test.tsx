import { render, screen } from "@testing-library/react";
import MonumentForm from "./MonumentForm";
import { MemoryRouter } from "react-router";
import MonumentsContextProvider from "../../context/MonumentsContextProvider";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

describe("Given the MonumentForm component", () => {
  const action = vitest.fn();

  beforeEach(() => {
    action.mockClear();
  });

  describe("When it renders", () => {
    test("Then it should show 'Introduce monument data' inside a heading", () => {
      render(
        <MemoryRouter>
          <MonumentForm action={action} />
        </MemoryRouter>,
        { wrapper: MonumentsContextProvider },
      );

      const formTitle = screen.getByRole("heading", {
        name: /introduce monument data/i,
      });

      expect(formTitle).toBeVisible();
    });

    test("Then it should show a 'Name' text box", () => {
      render(
        <MemoryRouter>
          <MonumentForm action={action} />
        </MemoryRouter>,
        { wrapper: MonumentsContextProvider },
      );

      const nameTextBox = screen.getByLabelText(/name/i);

      expect(nameTextBox).toBeVisible();
    });

    test("Then it should show a 'Description' text box", () => {
      render(
        <MemoryRouter>
          <MonumentForm action={action} />
        </MemoryRouter>,
        { wrapper: MonumentsContextProvider },
      );

      const descriptionTextBox = screen.getByLabelText(/description/i);

      expect(descriptionTextBox).toBeVisible();
    });

    test("Then it should show 'Register' inside a button", () => {
      render(
        <MemoryRouter>
          <MonumentForm action={action} />
        </MemoryRouter>,
        { wrapper: MonumentsContextProvider },
      );

      const registerButton = screen.getByRole("button", { name: /register/i });

      expect(registerButton).toBeVisible();
    });

    test("Then it should show a 'Register' button disabled", () => {
      render(
        <MemoryRouter>
          <MonumentForm action={action} />
        </MemoryRouter>,
        { wrapper: MonumentsContextProvider },
      );

      const registerButton = screen.getByRole("button", { name: /register/i });

      expect(registerButton).toBeDisabled();
    });
  });

  describe("And the user types 'Phra Pathom Chedi' in 'Name' text box", () => {
    test("Then it should show 'Phra Pathom Chedi' in 'Name' text box", async () => {
      render(
        <MemoryRouter>
          <MonumentForm action={action} />
        </MemoryRouter>,
        { wrapper: MonumentsContextProvider },
      );

      const nameTextBox = screen.getByLabelText(/name/i);

      await user.type(nameTextBox, "Phra Pathom Chedi");

      expect(nameTextBox).toHaveValue("Phra Pathom Chedi");
    });
  });

  describe("And receives an action and the user submits the form", () => {
    test("Then it should call the recevied action", async () => {
      render(
        <MemoryRouter>
          <MonumentForm action={action} />
        </MemoryRouter>,
        { wrapper: MonumentsContextProvider },
      );

      const nameTextBox = screen.getByLabelText(/name/i);
      const descriptionTextBox = screen.getByLabelText(/description/i);
      const imageUrlTextBox = screen.getByLabelText(/image url/i);
      const countryTextBox = screen.getByLabelText(/country/i);
      const cityTextBox = screen.getByLabelText(/city/i);

      await user.type(nameTextBox, "a");
      await user.type(descriptionTextBox, "a");
      await user.type(imageUrlTextBox, "https://www.google.com/");
      await user.type(countryTextBox, "a");
      await user.type(cityTextBox, "a");

      const registerButton = screen.getByRole("button", { name: /register/i });
      await user.click(registerButton);

      expect(action).toHaveBeenCalled();
    });
  });
});
