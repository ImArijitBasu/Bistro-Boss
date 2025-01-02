import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../../src/assets/home/slide1.jpg";
import slide2 from "../../../src/assets/home/slide2.jpg";
import slide3 from "../../../src/assets/home/slide3.jpg";
import slide4 from "../../../src/assets/home/slide4.jpg";
import slide5 from "../../../src/assets/home/slide5.jpg";
import SectionTitle from "../../Components/SectionTitle";

const Category = () => {
  return (
    <div className="">
        <SectionTitle heading={"Order online"} subHeading={"from 11am to 12pm"}></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24 "
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <p className="text-4xl uppercase text-center -mt-16 text-white">
            salads
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <p className="text-4xl uppercase text-center -mt-16 text-white">
            pizza
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <p className="text-4xl uppercase text-center -mt-16 text-white">
            Soups
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <p className="text-4xl uppercase text-center -mt-16 text-white">
            desserts
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <p className="text-4xl uppercase text-center -mt-16 text-white">
            salad
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
