import React, { useEffect } from "react";
import MonumentList from "../../components/MonumentList/MonumentList";
import useMonuments from "../../hooks/useMonuments";

const MonumentsPage: React.FC = () => {
  const { monuments, loadMonuments } = useMonuments();

  useEffect(() => {
    loadMonuments();
  }, [loadMonuments]);

  return <MonumentList monuments={monuments} />;
};

export default MonumentsPage;
