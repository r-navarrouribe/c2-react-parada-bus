import { useContext } from "react";
import { ContextoGeneral } from "../contexts/ContextoGeneral";

export const FormNumero = () => {
  const { buscarParada, setNumeroParada } = useContext(ContextoGeneral);
  return (
    <form onSubmit={buscarParada}>
      <label htmlFor="num-parada">Parada nº: </label>
      <input
        type="number"
        id="num-parada"
        onChange={(e) => setNumeroParada(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};
