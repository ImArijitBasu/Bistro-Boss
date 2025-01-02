import React from 'react';

const MenuItem = ({item}) => { 
    const {image , price ,recipe , name} = item
    console.log(image);
    return (
        <div className='flex space-x-4'>
            <img className={`w-[100px] bg-slate-500`} style={{
                borderRadius: "0 200px 200px 200px"
            }} src={image} alt="" />
            <div className="">
                <h3 className='uppercase'>{name}----------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default MenuItem;