import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../Hooks/useMenu';

const PopularMenu = () => {
    const [menu ] = useMenu()
    const popular = menu.filter(item => item.category === "popular")
    // useEffect(()=> {
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         const popularItems = data.filter(item => item.category === 'popular')
    //         setMenu(popularItems)
    //     })
    // },[])
    return (
        <section className='mb-12'>
            <SectionTitle heading={"from our menu"} subHeading={"popular items"}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    popular.map(item =><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;