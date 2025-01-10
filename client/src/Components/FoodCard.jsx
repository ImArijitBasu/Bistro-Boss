import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";
const FoodCard = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { image, price, recipe, name, _id } = item;
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [,refetch] = useCart()

  const handleAddToCart = (food) => {
    console.log(food);
    console.log(user);
    if (user && user.email) {
      //TODO: send data to the database
      console.log(user.email);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to the cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          //! refetch the data after sending data to the db to update the cart
          refetch()
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "please login to add food in cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login",
      }).then((result) => {
        if (result.isConfirmed) {
          //!send user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

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
            <button
              onClick={handleAddToCart}
              className="btn btn-outline border-0 border-b-4 mt-4 uppercase bg-slate-100 border-orange-400 hover:text-orange-400"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
