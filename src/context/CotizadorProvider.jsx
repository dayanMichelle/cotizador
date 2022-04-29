import { createContext, useState } from "react";

const CotizadorContext = createContext(); //crea un contexto

const CotizadorProvider = ({ children }) => {
 
  return (
    <CotizadorContext.Provider
      value={{
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};
export { CotizadorProvider };
export default CotizadorContext;
