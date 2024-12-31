import React from "react";
import { useParams, useLocation } from "react-router-dom";

const PersonDetail = () => {
  const { name } = useParams();
  const location = useLocation();

  return (
    <div>
      <h1>Detalles de {name}</h1>
      <p>Información adicional: {location.state?.name}</p>
    </div>
  );
};

export default PersonDetail;
