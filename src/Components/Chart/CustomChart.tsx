import { Chart } from "chart.js";
import "chart.js/auto";
import { useEffect } from "react";
import { getAllCandidate, getUsersCount } from "../../Data/ModifyData";

export default () => {
  useEffect(() => {
    const canvas = document.getElementById("myChart") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    const chart = new Chart(ctx || "", {
      type: "pie",
      data: {
        labels: Object.keys(getAllCandidate()),
        datasets: [
          {
            label: "Votes",
            data: Object.keys(getAllCandidate()).map(
              (e: any) => getAllCandidate()[e].voters.length - 1
            ),
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "rgb(41, 102, 735)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            callbacks: {
              label: (context: any) => {
                return ((context.raw * 100) / getUsersCount()).toFixed(2) + "%";
              },
            },
          },
        },
        maintainAspectRatio: false,
      },
    });
    return () => {
      chart.destroy();
    };
  }, []);
  return (
    <div style={{ height: "200px" }}>
      <h3 style={{ margin: "20px", textAlign: "left" }}>Votes Statistics</h3>
      <canvas width={700} height={200} id="myChart"></canvas>
    </div>
  );
};
