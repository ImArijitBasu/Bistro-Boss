import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://bistro-boss-server-psi-indol.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, []);
  return (
    <section className="my-20">
      <SectionTitle
        subHeading={"what our client says"}
        heading={"testimonials"}
      ></SectionTitle>
      <div className="">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="m-24 flex flex-col items-center space-y-4">
                <Rating style={{ maxWidth: 180 }} value={review?.rating} readOnly />
                <p>{review?.details}</p>
                <p className="text-2xl text-orange-400">{review?.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
