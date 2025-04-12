import React from "react";
import MonumentForm from "../../components/MonumentForm/MonumentForm";
import "./AddMonumentPage.css";

const AddMonumentPage: React.FC = () => {
  return (
    <>
      <h2 className="page-title">Add monument</h2>
      <MonumentForm action={() => {}} />
    </>
  );
};

export default AddMonumentPage;
