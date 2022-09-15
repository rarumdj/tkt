import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import { useActions } from "../utils/redux/useAction";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    labels: {
      fontColor: "white",
    },
    align: "end",
    position: "bottom",
  },
  tooltips: {
    mode: "index",
    intersect: false,
  },
  hover: {
    mode: "nearest",
    intersect: true,
  },
  layout: {
    padding: { bottom: 40, top: 10, left: 30, right: 30 },
  },
  plugins: {
    legend: false,
    datalabels: {
      display: false,
    },
  },
  scales: {
    xAxes: {
      ticks: {
        fontColor: "rgba(231, 234, 238, 1)",
      },
      display: true,
      scaleLabel: {
        display: false,
        labelString: "Month",
        fontColor: "white",
      },
      grid: {
        display: false,
        borderDash: [2],
        drawBorder: false,
        borderDashOffset: [2],
        color: "rgba(231, 234, 238, 1)",
        zeroLineColor: "rgba(0, 0, 0, 0)",
        zeroLineBorderDash: [2],
        zeroLineBorderDashOffset: [2],
      },
    },
    yAxes: {
      beginAtZero: true,

      ticks: {
        fontColor: "rgba(231, 234, 238, 1)",
      },
      display: true,
      scaleLabel: {
        display: false,
        labelString: "Value",
        fontColor: "white",
      },
      grid: {
        borderDash: [3],
        borderDashOffset: [3],
        drawBorder: false,
        color: "rgba(231, 234, 238, 1)",
        zeroLineColor: "rgba(231, 234, 238, 1)",
        zeroLineBorderDash: [2],
        zeroLineBorderDashOffset: [2],
      },
    },
  },
};

const labels = ["2016", "2017"];

export const datas = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [10, 65],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const DetailsPage = () => {
  const { id } = useParams();

  const { fetchBusiness, fetchBusinessResult } = useActions();

  const { loading, error, data, success } = useSelector(
    (state) => state.business
  );
  console.log(data);
  useEffect(() => {
    if (id) fetchBusiness(id);
  }, [fetchBusiness, id]);

  useEffect(() => {
    if (success) fetchBusinessResult();
  }, [success, fetchBusinessResult]);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="border border-gray-300 rounded-md p-8 ">
        <div className="mb-4">Chiffre d’affaire</div>
        <div className="relative h-[280px] w-full">
          <Bar options={options} data={datas} />
        </div>
      </div>
      <div className="border border-gray-300 rounded-md p-8">
        <div className="mb-4">EBITDA</div>
        <div className="relative h-[280px] w-full">
          <Bar options={options} data={datas} />
        </div>
      </div>
      <div className="border border-gray-300 rounded-md p-8">
        <div className="mb-4">Loss</div>
        <div className="relative h-[280px] w-full">
          <Bar options={options} data={datas} />
        </div>
      </div>
      <div className="border border-gray-300 rounded-md p-8">
        <div className="mb-4">Margin</div>
        <div className="relative h-[280px] w-full">
          <Bar options={options} data={datas} />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
