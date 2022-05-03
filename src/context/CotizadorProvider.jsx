import { createContext, useState } from "react";
import {
  obtenerDiferenciaYear,
  calcularMarca,
  calcularPlan,
  formatearDinero,
} from "../helpers";

const CotizadorContext = createContext(); //crea un contexto

const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });
  const [error, setError] = useState("");
  const handleChangeDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };
  const cotizarSeguro = () => {
    //Una base,
    let resultado = 2000;
    // Obtener diferencia de años
    const diferencia = obtenerDiferenciaYear(datos.year);

    // Hay que restar el 3% por cada año
    resultado -= (diferencia * 3 * resultado) / 100;

    // Americano un 15%
    //Europeo 30%
    //Asiatico 5%

    resultado *= calcularMarca(datos.marca);

    resultado *= calcularPlan(datos.plan);

    //Formatear el resultado
    resultado = formatearDinero(resultado);
  };

  return (
    <CotizadorContext.Provider
      value={{
        handleChangeDatos,
        datos,
        error,
        setError,
        cotizarSeguro,
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};
export { CotizadorProvider };
export default CotizadorContext;
