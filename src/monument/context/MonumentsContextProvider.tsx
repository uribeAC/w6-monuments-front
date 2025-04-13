import React, {
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";
import MonumentsContextStructure from "./types";
import MonumentsContext from "./MonumentsContext";
import { Monument, MonumentData } from "../types";
import MonumentClient from "../client/MonumentClient";

const MonumentsContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [monuments, setMonuments] = useState<Monument[]>([]);

  const monumentClient = useMemo(() => new MonumentClient(), []);

  const loadMonuments = useCallback(async (): Promise<void> => {
    const apiMonuments = await monumentClient.getMonuments();

    setMonuments(apiMonuments);
  }, [monumentClient]);

  const createMonument = async (
    monumentData: MonumentData,
  ): Promise<Monument> => {
    const newMonument = await monumentClient.addMonument(monumentData);

    setMonuments((monuments) => [...monuments, newMonument]);

    return newMonument;
  };

  const monumentsContextValue: MonumentsContextStructure = {
    monuments,
    loadMonuments,
    createMonument,
  };

  return (
    <MonumentsContext.Provider value={monumentsContextValue}>
      {children}
    </MonumentsContext.Provider>
  );
};

export default MonumentsContextProvider;
