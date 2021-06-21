import { useContext } from "react";
import { ContextoGeneral } from "../contexts/ContextoGeneral";

export const TiempoLinea = () => {
  const { tiempoLinea, numeroLinea } = useContext(ContextoGeneral);
  return (
    <h2>
      Tiempo para la línea {numeroLinea}: {tiempoLinea}
    </h2>
  );
};
