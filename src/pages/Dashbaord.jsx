import React, { useEffect } from "react";
import ItemList from "../components/ItemList";
import { useActions } from "../utils/redux/useAction";
import { useSelector } from "react-redux";
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
  const { fetchBusinessList } = useActions();

  const { loading, error, data } = useSelector((state) => state.listBuisness);

  useEffect(() => {
    fetchBusinessList();
  }, [fetchBusinessList]);


  return (
    <div className="w-full">
      <div className="grid md:grid-cols-2 gap-6 md:w-8/12">
        <select
          id="countries"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Sector *</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>

        <select
          id="countries"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Company *</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
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
