import { useState } from "react";
import { Formularios } from "./components/Formularios";
import { Header } from "./components/Header";
import { ContextoGeneral } from "./contexts/ContextoGeneral";

function App() {
  // declaraciones API
  const app_id = "f3dba596";
  const app_key = "ae69f1754aa3ce41ef56c1d6ae14bbb1";
  const urlAPI = {
    paradas: "https://api.tmb.cat/v1/transit/parades/",
    lineas: "https://api.tmb.cat/v1/ibus/stops/",
  };

  // mensaje
  const [titulo, setTitulo] = useState("Número de Parada");
  const [numeroParada, setNumeroParada] = useState("");

  // display
  const [arrayParadas, setArrayParadas] = useState([]);

  // formularios
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [tiempoLinea, setTiempoLinea] = useState("");
  const [numeroLinea, setNumeroLinea] = useState("");

  // Función fetch
  const buscarParada = async (e) => {
    e.preventDefault();
    try {
      const getDatos = await fetch(
        `${urlAPI.paradas}${numeroParada}?app_id=${app_id}&app_key=${app_key}`
      );
      const getParada = await getDatos.json();
      if (getParada.crs === null) {
        setTitulo(`Parada nº ${numeroParada} no existe`);
      } else {
        setTitulo(`Parada nº ${numeroParada}`);
        const llamadaDatos = await fetch(
          `${urlAPI.lineas}${numeroParada}?app_id=${app_id}&app_key=${app_key}`
        );
        const respuestaDatos = await llamadaDatos.json();
        setArrayParadas(respuestaDatos.data.ibus);
        setMostrarFormulario(true);
        console.log(arrayParadas);
      }
    } catch {
      console.log("algo va mal");
    }
  };

  return (
    <div className="contenedor">
      <ContextoGeneral.Provider
        value={{
          buscarParada,
          numeroParada,
          setNumeroParada,
          titulo,
          arrayParadas,
          mostrarFormulario,
          tiempoLinea,
          setTiempoLinea,
          numeroLinea,
          setNumeroLinea,
        }}
      >
        <Header />
        <Formularios />
      </ContextoGeneral.Provider>
    </div>
  );
}

export default App;
