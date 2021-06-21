import { Display } from "./Display";
import { NumeroParada } from "./NumeroParada";
import { TiempoLinea } from "./TiempoLinea";

export const Header = () => {
  return (
    <header className="cabecera">
      <NumeroParada />
      <Display />
      <TiempoLinea />
    </header>
  );
};
