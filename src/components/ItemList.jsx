import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const ItemList = ({ header, lists }) => {
  const navigate = useNavigate();
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
          onClick={() => navigate(`details/${item.id}`)}
          className="border rounded-md border-gray-200 p-6 grid grid-cols-3 gap-4 items-center cursor-pointer">
          <h4>{item.name}</h4>
          <h4>{item.siren}</h4>
          <Button
            className="w-fit"
            onClick={() => navigate(`details/${item.id}`)}>
            {item.sector}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
