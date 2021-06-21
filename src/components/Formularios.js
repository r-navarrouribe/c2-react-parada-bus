import { useContext } from "react";
import { ContextoGeneral } from "../contexts/ContextoGeneral";
import { FormLinea } from "./FormLinea";
import { FormNumero } from "./FormNumero";

export const Formularios = () => {
  const { mostrarFormulario } = useContext(ContextoGeneral);
  return (
    <section className="forms">
      <FormNumero />
      {mostrarFormulario && <FormLinea />}
    </section>
  );
};
