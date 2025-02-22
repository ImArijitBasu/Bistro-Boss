import React from "react";
import SectionTitle from "../../Components/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {
  const { register, handleSubmit ,reset} = useForm();
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure()
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api ,imageFile ,{
        headers: {
            'Content-Type' : "multipart/form-data"
        }
    } )
    if(res.data.success){
        // now send the menu item data to the db
        const menuItem = {
            name: data.name,
            recipe: data.recipe,
            image: res.data.data.display_url,
            category: data.category,
            price: parseFloat(data.price),
        };
        // send data using axios secure as only admin can add new items
        const menuRes = await axiosSecure.post('/menu' , menuItem);
        console.log(menuRes.data);
        if(menuRes.data.insertedId){
            reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is added to the Menu`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    }
    console.log(res.data);
    
  };
  return (
    <div className="bg-gray-100">
      <SectionTitle
        heading={"add an item"}
        subHeading={"what's new"}
      ></SectionTitle>
      <div className="">
        {/* //! form */}
        <form className="space-y-6 p-4" onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Recipe Name *</span>
            </div>
            <input
              {...register("name" ,{required: true})}
              type="text"
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
              defaultValue={"default"}
                {...register("category" ,{required: true})}
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
                {...register("price" ,{required: true})}
                type="number"
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
            {...register("recipe" ,{required: true})}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </label>
          <div className="form-control">
            <input {...register("image" ,{required: true})} type="file" className="file-input w-full max-w-xs" />
          </div>
          <button className="btn bg-orange-400">Add Item <FaUtensils></FaUtensils></button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;