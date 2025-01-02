import React from "react";

const FoodCard = ({ item }) => {
  const { image, price, recipe, name } = item;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="bg-slate-900 text-white absolute right-0 px-2 rounded-xl mr-4 mt-4 font-semibold">
          ${price}
        </p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
          <div className="btn btn-outline border-0 border-b-4 mt-4 uppercase bg-slate-100 border-orange-400 hover:text-orange-400">add to cart</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
