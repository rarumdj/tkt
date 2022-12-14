import {
  BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title,
  Tooltip
} from "chart.js";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getBusinessDetialsAction,
  getBusinessResultsAction
} from "../utils/redux-saga/actions/businessActions";
import {
  RESET_BLOCK_BUSINESS
} from "../utils/redux-saga/reducers/businessReducer";

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

const DetailsPage = () => {
  const { id } = useParams();
  const [data2016, setData2016] = useState();
  const [data2017, setData2017] = useState();
  const dispatch = useDispatch();

  const {
    getBusinessDetails: { data, success },
    getBusinessResults: { data: businessResult },
  } = useSelector(({ business }) => business);

  useEffect(() => {
    if (id) dispatch(getBusinessDetialsAction(id));
    return () => {
      dispatch({ type: RESET_BLOCK_BUSINESS, blockType: "getBusinessDetails" });
    };
  }, [dispatch, id]);

  useEffect(() => {
    if (success && !data2017)
      dispatch(getBusinessResultsAction(data?.results[0]));
  }, [dispatch, data, success, data2017]);

  useEffect(() => {
    if (businessResult && data2017 && !data2016)
      dispatch(getBusinessResultsAction(data?.results[1]));
  }, [dispatch, data, data2017, data2016, businessResult]);

  useEffect(() => {
    if (businessResult && !data2017) setData2017(businessResult);
  }, [data2017, businessResult]);

  useEffect(() => {
    if (businessResult && data2017 && !data2016)
      setTimeout(() => {
        setData2016(businessResult);
      }, 600);
  }, [data2017, data2016, businessResult]);

  const cadata = {
    labels,
    datasets: [
      {
        data: [data2016?.ca, data2017?.ca],
        backgroundColor: "#4E59FF",
      },
    ],
  };

  const ebitdadata = {
    labels,
    datasets: [
      {
        data: [data2016?.ebitda, data2017?.ebitda],
        backgroundColor: "#4E59FF",
      },
    ],
  };

  const lossdata = {
    labels,
    datasets: [
      {
        data: [data2016?.loss, data2017?.loss],
        backgroundColor: "#4E59FF",
      },
    ],
  };

  const margindata = {
    labels,
    datasets: [
      {
        data: [data2016?.margin, data2017?.margin],
        backgroundColor: "#4E59FF",
      },
    ],
  };

  if (!data2016 || !data2017)
    return (
      <div className="h-screen w-full flex">
        <div className="spinner-3 m-auto"></div>
      </div>
    );
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="border border-gray-300 rounded-md p-8 ">
        <div className="mb-4">Chiffre d???affaire</div>
        <div className="relative h-[280px] w-full">
          <Bar options={options} data={cadata} />
        </div>
      </div>
      <div className="border border-gray-300 rounded-md p-8">
        <div className="mb-4">EBITDA</div>
        <div className="relative h-[280px] w-full">
          <Bar options={options} data={ebitdadata} />
        </div>
      </div>
      <div className="border border-gray-300 rounded-md p-8">
        <div className="mb-4">Loss</div>
        <div className="relative h-[280px] w-full">
          <Bar options={options} data={lossdata} />
        </div>
      </div>
      <div className="border border-gray-300 rounded-md p-8">
        <div className="mb-4">Margin</div>
        <div className="relative h-[280px] w-full">
          <Bar options={options} data={margindata} />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
