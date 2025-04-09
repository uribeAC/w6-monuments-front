import React from "react";
import MonumentList from "../../components/MonumentList/MonumentList";
import MonumentClient from "../../client/MonumentClient";

const client = new MonumentClient();
const data = await client.getMonuments();

const MonumentsPage: React.FC = () => {
  return <MonumentList monuments={data} />;
};

export default MonumentsPage;
