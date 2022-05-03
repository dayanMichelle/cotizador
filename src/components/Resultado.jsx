import useCotizador from "../hooks/useCotizados";
const Resultado = () => {
  const { resultado } = useCotizador();
  return <div>{resultado ==0 ? null: resultado}</div>;
};

export default Resultado;
