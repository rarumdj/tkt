import React from "react";
import { useHistory } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import Button from "./Button";

const ItemList = ({ header, lists }) => {
  const history = useHistory();
  return (
    <div className="space-y-4 mt-14">
      <div className="grid grid-cols-3 gap-4 px-6">
        {header?.map((item, index) => (
          <h4 key={index}>{item}</h4>
        ))}
      </div>
      {lists.map((item, index) => (
        <div
          key={index}
          className="border rounded-md hover:border hover:border-indigo-500 hover:bg-gray-50 border-gray-200 p-6 grid grid-cols-3 gap-4 items-center cursor-pointer">
          <h4>{item.name}</h4>
          <h4>{item.siren}</h4>
          <Button
            className="w-fit"
            onClick={() => history.push(`business-details/${item.id}`)}>
            {item.sector}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
