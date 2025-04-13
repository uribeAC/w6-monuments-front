import React from "react";
import MonumentForm from "../../components/MonumentForm/MonumentForm";
import "./AddMonumentPage.css";
import useMonuments from "../../hooks/useMonuments";

const AddMonumentPage: React.FC = () => {
  const { createMonument } = useMonuments();

  return (
    <>
      <h2 className="page-title">Add monument</h2>
      <MonumentForm action={createMonument} />
    </>
  );
};

export default AddMonumentPage;
