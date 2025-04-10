import React from "react";
import "./NotFoundPage.css";

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found">
      <img
        src="public/ruins-icon.png"
        alt="monument ruins icon"
        width={350}
        height={350}
      />
      <h2>Page not found</h2>
      <span>ERROR 404</span>
    </div>
  );
};

export default NotFoundPage;
