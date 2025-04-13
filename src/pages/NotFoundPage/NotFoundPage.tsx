import React from "react";
import "./NotFoundPage.css";

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found">
      <img
        src="/ruins-icon.png"
        alt="monument ruins icon"
        width={270}
        height={270}
        className="not-found__image"
      />
      <h2>Page not found</h2>
      <span>ERROR 404</span>
    </div>
  );
};

export default NotFoundPage;
