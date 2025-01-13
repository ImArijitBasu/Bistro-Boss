import { useLoaderData } from "react-router-dom";
import React from "react";
import SectionTitle from "../../Components/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateItem = () => {
  const item = useLoaderData();
  console.log(item);
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item data to the db
      const menuItem = {
        name: data.name,
        recipe: data.recipe,
        image: res.data.data.display_url,
        category: data.category,
        price: parseFloat(data.price),
      };
      // send data using axios secure as only admin can add new items
      const menuRes = await axiosSecure.patch(`/menu/${item._id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is Updated to the Menu`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log(res.data);
  };
  return (
    <div>
      <SectionTitle
        heading={"update item"}
        subHeading={"refresh info"}
      ></SectionTitle>
      <div className="">
        {/* //! form */}
        <form className="space-y-6 p-4" onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Recipe Name *</span>
            </div>
            <input
              {...register("name")}
              type="text"
              defaultValue={item?.name}
              placeholder="Recipe Name"
              className="input input-bordered w-full"
            />
          </label>
          <div className="flex justify-between items-center gap-4">
            {/* //! category */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select
                defaultValue={item?.category}
                {...register("category")}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </label>
            {/* //! price */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Price *</span>
              </div>
              <input
                {...register("price")}
                type="number"
                defaultValue={item?.price}
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe *</span>
            </div>
            <textarea
              {...register("recipe")}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe"
              defaultValue={item?.recipe}
            ></textarea>
          </label>
          <div className="form-control">
            <input
              {...register("image")}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <button className="btn bg-orange-400">
            Update Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
