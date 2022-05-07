import React from "react";
import { useNavigate } from "react-router-dom";
import { buttonsData } from "./buttons-data";

export const MainComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      {buttonsData.map((button, idx) => (
        <button key={idx} onClick={() => navigate(`/${button.url}`)}>
          {button.name}
        </button>
      ))}
    </div>
  );
};
