import { FormLinea } from "./FormLinea";
import { FormNumero } from "./FormNumero";

export const Formularios = () => {
  return (
    <section className="forms">
      <FormNumero />
      <FormLinea />
    </section>
  );
};
