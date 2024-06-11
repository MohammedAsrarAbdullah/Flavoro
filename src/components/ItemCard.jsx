import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/slices/CardSlice";
import toast from 'react-hot-toast';

const ItemCard = ({ id, name, price, img, rating, qty }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3 relative">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, name, price, img, qty }));
          toast(`${name} removed`, {
            icon: "👋",
          });
        }}
        className="absolute right-7 top-2 text-gray-700 cursor-pointer"
      />
      <img src={img} alt={name} className="w-[50px] h-[50px] object-fill" /> 
      <div className="flex flex-col justify-between">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between items-center">
          <span className="text-green-500 font-bold">₹{price}</span>
          <div className="flex items-center gap-2">
            <AiOutlineMinus
              onClick={() => qty > 1 ? dispatch(decrementQty({ id })) : null}
              className="border-2 border-gray-600 text-gray-600 hover:bg-green-500 hover:text-white cursor-pointer hover:border-none p-1 text-xl rounded-md transition-all ease-linear"
            />
            <span>{qty}</span>
            <AiOutlinePlus
              onClick={() => dispatch(incrementQty({ id }))}
              className="border-2 border-gray-600 text-gray-600 hover:bg-green-500 hover:text-white cursor-pointer hover:border-none p-1 text-xl rounded-md transition-all ease-linear"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
