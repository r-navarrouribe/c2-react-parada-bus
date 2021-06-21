import { useContext } from "react";
import { ContextoGeneral } from "../contexts/ContextoGeneral";
import { Display } from "./Display";
import { NumeroParada } from "./NumeroParada";
import { TiempoLinea } from "./TiempoLinea";

export const Header = () => {
  const { arrayParadas } = useContext(ContextoGeneral);
  return (
    <header className="cabecera">
      <NumeroParada />
      <Display />
      <TiempoLinea />
    </header>
  );
};
