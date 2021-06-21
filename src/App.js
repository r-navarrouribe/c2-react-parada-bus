import { Formularios } from "./components/Formularios";
import { Header } from "./components/Header";
import { ContextoGeneral } from "./contexts/ContextoGeneral";

function App() {
  return (
    <div className="contenedor">
      <ContextoGeneral.Provider value={0}>
        <Header />
        <Formularios />
      </ContextoGeneral.Provider>
    </div>
  );
}

export default App;
