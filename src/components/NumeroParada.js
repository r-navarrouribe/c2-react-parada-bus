import { useContext } from "react";
import { ContextoGeneral } from "../contexts/ContextoGeneral";

export const NumeroParada = () => {
  const { titulo } = useContext(ContextoGeneral);
  return <h1>{titulo}</h1>;
};
