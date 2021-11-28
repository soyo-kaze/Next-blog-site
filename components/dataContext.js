import { createContext, useContext } from "react";

const context = createContext();

export const DataProvider = ({ children }) => {
  return <context.Provider value={"hello"}>{children}</context.Provider>;
};

export const InfoProvider = () => useContext(context);
