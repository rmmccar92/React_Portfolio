import React, { createContext, useContext } from "react";
// import { usePodCentralReducer } from "./reducers";

const PortfolioContext = createContext();
// const { Provider } = PodCentralContext;

const PortfolioProvider = (props) => {
  // const [state, dispatch] = usePodCentralReducer({});

  return <PortfolioContext.Provider value={{}} {...props} />;
};

const usePortfolioContext = () => {
  return useContext(PortfolioContext);
};

export { PortfolioProvider, usePortfolioContext };
