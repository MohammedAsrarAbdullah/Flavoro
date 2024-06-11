import {  React, useState} from 'react'
import { IoMdClose } from "react-icons/io";
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate()
  const [activeCart, setactiveCart] = useState(false)
  const cartItem= useSelector((state)=>state.cart.cart)
  const totalQty = cartItem.reduce((totalQty, item)=> totalQty + item.qty , 0)
  const totalPrice = cartItem.reduce((total , item)=> total +item.qty *item.price ,0)
  console.log(cartItem)
  return (
    <>
      <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white transition-transform ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500`}>
      <div className='flex justify-between my-2'>
        <span className='text-xl text-gray-800 font-bold'>My Order</span>
        <IoMdClose onClick={()=>setactiveCart(!activeCart)} className=' border-2 border-gray-600 text-gray-600 font-bold cursor-pointer p-1 text-xl rounded-md hover:border-red-300 hover:text-red-300'/>
      </div>
    {cartItem.length>0? cartItem.map((food)=>{
        return <ItemCard key={food.id}
        id={food.id}
        name={food.name}
        price= {food.price}
        rating= {food.rating}
        img ={food.img}
        qty = {food.qty}
         />
      })
    : <h2 className='font-bold text-gray-500 text-lg text-center'>Your Cart is Empty</h2>}
      

      <div className='absolute bottom-0'>
        <h3 className='font-semibold text-gray-800'>Item:{totalQty}</h3>
        <h3 className='font-semibold text-gray-800'>Total Amount: {totalPrice} </h3>
        <hr className='w-[90vw] lg:w-[18vw] my-2 '/>
        <button onClick={()=>navigate("/success")} className='bg-green-500 p-2 rounded-lg text-white font-bold lg:w-[18vw] w-[90vw] mb-3'>CheckOut</button>
      </div>
      </div>
      <FaShoppingCart onClick={()=>setactiveCart(!activeCart)} className={` rounded-full bg-white cursor-pointer shadow-md fixed right-4 bottom-4 text-5xl p-3 ${totalQty >0 && "animate-bounce delay-100 transition-all"}`} />
   
    </>
  )
}

export default Cart
