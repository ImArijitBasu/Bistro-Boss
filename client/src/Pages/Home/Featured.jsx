import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import featuredImg from '../../../src/assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-item text-white pt-8 my-20 bg-fixed bg-cover bg-no-repeat'>
            <SectionTitle heading={"Featured items"} subHeading={"check it out"}></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500/40">
                <div className="">
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20 , 2029</p>
                    <p className='uppercase'>Where can i get some</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores hic ut alias officia dolorem sit repellat blanditiis, expedita sapiente nesciunt, nostrum aliquam voluptates obcaecati aut enim modi ducimus rerum quisquam repudiandae tempore? Rerum, est nulla? Alias consectetur harum nulla? Blanditiis quaerat provident modi deleniti adipisci cum illum voluptate tempora neque!</p>
                    <div className="btn btn-outline border-0 border-b-4 mt-4">Order Now</div>
                </div>
            </div>
        </div>
    );
};

export default Featured;