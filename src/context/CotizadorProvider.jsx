import { createContext, useState } from "react";

const CotizadorContext = createContext(); //crea un contexto

const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  })
  const handleChangeDatos = (e) => {
    setDatos ({
      ...datos,
      [e.target.name] : e.target.value
    })
  }
 
  return (
    <CotizadorContext.Provider
      value={{
        handleChangeDatos,
        datos
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};
export { CotizadorProvider };
export default CotizadorContext;
