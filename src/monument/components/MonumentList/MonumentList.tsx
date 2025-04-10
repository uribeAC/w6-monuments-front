import React from "react";
import { Monument } from "../../types";
import MonumentCard from "../MonumentCard/MonumentCard";
import "./MonumentList.css";

interface MonumentListProps {
  monuments: Monument[];
}

const MonumentList: React.FC<MonumentListProps> = ({ monuments }) => {
  return (
    <ul className="monuments">
      {monuments.map((monument) => (
        <li key={monument.id}>
          <MonumentCard monument={monument} />
        </li>
      ))}
    </ul>
  );
};

export default MonumentList;
