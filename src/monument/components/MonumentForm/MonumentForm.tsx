import React, { useState } from "react";
import { MonumentData } from "../../types";
import "./MonumentForm.css";

interface MonumentFormProps {
  action: () => void;
}

const MonumentForm: React.FC<MonumentFormProps> = ({ action: action }) => {
  const initialMonumentData: MonumentData = {
    name: "",
    description: "",
    imageUrl: "",
    city: "",
    country: "",
  };

  const [monumentData, setMonumentData] =
    useState<MonumentData>(initialMonumentData);

  const changeMonumentData = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const newValue = event.target.value;
    const propertyName =
      event.target.id === "image-url" ? "imageUrl" : event.target.id;

    setMonumentData((monumentData) => ({
      ...monumentData,
      [propertyName]: newValue,
    }));
  };

  const isFormValid =
    monumentData.name !== "" &&
    monumentData.description !== "" &&
    monumentData.imageUrl !== "" &&
    monumentData.country !== "" &&
    monumentData.city !== "";

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    action();
  };

  return (
    <div className="form-wrapper">
      <h2 className="form-title">Introduce monument data:</h2>
      <form className="monument-form" onSubmit={onSubmitForm}>
        <div className="monument-form__label">
          <label htmlFor="name" className="monument-form__text">
            Name:
          </label>
          <input
            type="text"
            className="monument-form__control"
            id="name"
            value={monumentData.name}
            onChange={changeMonumentData}
            required
          />
        </div>
        <div className="monument-form__label">
          <label htmlFor="description" className="monument-form__text">
            Description:
          </label>
          <textarea
            rows={2}
            className="monument-form__control"
            id="description"
            value={monumentData.description}
            onChange={changeMonumentData}
            required
          />
        </div>
        <div className="monument-form__label">
          <label htmlFor="image-url" className="monument-form__text">
            Image URL:
          </label>
          <input
            type="url"
            className="monument-form__control"
            id="image-url"
            value={monumentData.imageUrl}
            onChange={changeMonumentData}
            required
          />
        </div>
        <div className="monument-form__label">
          <label htmlFor="country" className="monument-form__text">
            Country:
          </label>
          <input
            type="text"
            className="monument-form__control"
            id="country"
            value={monumentData.country}
            onChange={changeMonumentData}
            required
          />
        </div>
        <div className="monument-form__label">
          <label htmlFor="city" className="monument-form__text">
            City:
          </label>
          <input
            type="text"
            className="monument-form__control"
            id="city"
            value={monumentData.city}
            onChange={changeMonumentData}
            required
          />
        </div>
        <button
          className="monument-form__button"
          type="submit"
          disabled={!isFormValid}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default MonumentForm;
