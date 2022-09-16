import React, { useEffect } from "react";
import ItemList from "../components/ItemList";
import { useDispatch, useSelector } from "react-redux";
import { getBusinessAction } from "../utils/redux-saga/actions/businessActions";
const header = ["COMPANY", "N° SIREN", "CATEGORY"];
const lists = [
  {
    company: "Abbott and sons",
    siren: "113996185",
    category: "Luxury",
    link: "details",
  },
  {
    company: "Abbott and sons",
    siren: "113996185",
    category: "Luxury",
    link: "details",
  },
  {
    company: "Abbott and sons",
    siren: "113996185",
    category: "Luxury",
    link: "details",
  },
  {
    company: "Abbott and sons",
    siren: "113996185",
    category: "Luxury",
    link: "details",
  },
];
const Dashbaord = () => {
  const dispatch = useDispatch();

  const {
    getBusiness: { loading, data },
  } = useSelector(({ business }) => business);

  useEffect(() => {
    dispatch(getBusinessAction());
  }, [dispatch]);
  return (
    <div className="w-full">
      <div className="grid md:grid-cols-2 gap-6 md:w-8/12">
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Sector *</option>
          {data?.map((item, i) => (
            <option key={i} value={item.sector}>
              {item.sector}
            </option>
          ))}
        </select>

        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Company *</option>
          {data?.map((item, i) => (
            <option key={i} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      {loading && (
        <div className="w-full h-screen flex ">
          <div className="spinner-3 m-auto"></div>
        </div>
      )}
      {data && !loading && <ItemList header={header} lists={data} />}
    </div>
  );
};

export default Dashbaord;
