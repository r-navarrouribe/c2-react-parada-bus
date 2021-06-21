import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { ContextoGeneral } from "../contexts/ContextoGeneral";

export const Display = () => {
  const { arrayParadas } = useContext(ContextoGeneral);
  return (
    <div className="display">
      {arrayParadas.map((parada) => (
        <div className="bus" key={parada.routeId}>
          <span className="linea">{parada.line}</span>
          <span className="destino">{parada.destination}</span>
          <span className="tiempo">{parada["text-ca"]}</span>
        </div>
      ))}
    </div>
  );
};
