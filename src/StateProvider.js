import React from "react";
import { createContext, useContext, useReducer } from "react";

// This is data layer
// We need this to track the basket
export const StateContext = createContext();


// Build a Provider
export const StateProvider = ({ reducer, initialState, children}) => (
  <StateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = ()=> useContext(StateContext);
