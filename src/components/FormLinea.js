import { useContext } from "react";
import { ContextoGeneral } from "../contexts/ContextoGeneral";

export const FormLinea = () => {
  const { arrayParadas, setTiempoLinea } = useContext(ContextoGeneral);
  return (
    <form>
      <label htmlFor="tiempo-linea">Tiempo para que llegue la línea: </label>
      <select
        id="tiempo-linea"
        onChange={(e) => setTiempoLinea(e.target.value)}
      >
        {arrayParadas.map((parada) => (
          <option key={parada.routeId} value={parada["text-ca"]}>
            {parada.line}
          </option>
        ))}
      </select>
    </form>
  );
};
