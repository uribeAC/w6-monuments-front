import React, { useEffect, useState } from "react";
import MonumentList from "../../components/MonumentList/MonumentList";
import MonumentClient from "../../client/MonumentClient";
import { Monument } from "../../types";

const MonumentsPage: React.FC = () => {
  const [monuments, setMonuments] = useState<Monument[]>([]);

  useEffect(() => {
    (async () => {
      const monumentClient = new MonumentClient();
      const apiMonuments = await monumentClient.getMonuments();

      setMonuments(apiMonuments);
    })();
  }, []);

  return <MonumentList monuments={monuments} />;
};

export default MonumentsPage;
