import React from 'react';
import FoodCard from './FoodCard';
import FoodData from '../Data/FoodData';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const Fooditem = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);

  const handleToast = (name) => {
    toast.success(`Added ${name} to the cart`);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className='flex flex-wrap gap-4 justify-center lg:justify-start mx-4 my-10'>
        {
          FoodData.filter((food) => {
            const matchesCategory = category === "All" || food.category === category;
            const matchesSearch = food.name.toLowerCase().includes(search.toLowerCase());
            return matchesCategory && matchesSearch;
          }).map((food) => (
            <FoodCard
              key={food.id}
              id={food.id}
              name={food.name}
              rating={food.rating}
              price={food.price}
              desc={food.desc}
              img={food.img}
              handleToast={handleToast}
            />
          ))
        }
      </div>
    </>
  );
};

export default Fooditem;
