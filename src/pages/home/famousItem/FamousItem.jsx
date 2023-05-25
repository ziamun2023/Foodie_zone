import React, { useEffect, useState } from 'react';
import HeadTitle from '../../shared/HeadTitle';
import { useFetcher } from 'react-router-dom';
import MenuItem from '../../shared/MenuItem';
import MenuHook from '../../../hooks/MenuHook';

const FamousItem = () => {
    const [menu]=MenuHook()
    const  popular =menu.filter(item=>item.category==='popular')
    return (
        <section >
            <HeadTitle heading={'BEST ITEMS'} subheading={'From our menu'}></HeadTitle>

            <div className=' grid lg:grid-cols-2  ' >
                {
                    popular.map(item=><MenuItem  key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default FamousItem;