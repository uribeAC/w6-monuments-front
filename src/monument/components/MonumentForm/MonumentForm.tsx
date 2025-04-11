import React from "react";
import "./MonumentForm.css";

const MonumentForm: React.FC = () => {
  return (
    <div className="form-wrapper">
      <h2 className="form-title">Introduce monument data:</h2>
      <form className="monument-form">
        <div className="monument-form__label">
          <label htmlFor="name" className="monument-form__text">
            Name:
          </label>
          <input
            type="text"
            className="monument-form__control"
            id="name"
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
            required
          />
        </div>
        <button className="monument-form__button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default MonumentForm;
