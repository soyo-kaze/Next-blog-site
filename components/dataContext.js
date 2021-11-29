import { createContext, useContext } from "react";
import { useReducer } from "react";
import { reducer, InitialState } from "./Reducer";

const context = createContext();

export const DataProvider = ({ children }) => {
  return (
    <context.Provider value={useReducer(reducer, InitialState)}>
      {children}
    </context.Provider>
  );
};

export const InfoProvider = () => useContext(context);
