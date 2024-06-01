import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function Radarmap({ skills }) {
  if (!Array.isArray(skills)) {
    return <p>No hay datos de habilidades disponibles</p>;
  }

  const radarData = {
    labels: skills.map((skill) => skill.name),
    datasets: [
      {
        label: "% Skill mastery",
        data: skills.map((skill) => skill.porcentage),
        backgroundColor: "rgba(128, 134, 176, 0.2)",
        borderColor: "rgba(1, 111, 129, 1)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div style={{ width: "300px", height: "300px" }} className="">
      <Radar data={radarData} />
    </div>
  );
}

export default Radarmap;
