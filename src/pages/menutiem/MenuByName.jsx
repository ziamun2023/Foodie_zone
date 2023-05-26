import React from 'react';
import Cover from '../shared/Cover';
import MenuItem from '../shared/MenuItem';
import { Link } from 'react-router-dom';

const MenuByName = ({dessert,title, menuimage}) => {
    return (
        <div>
            <Cover backgroundImage={menuimage} Menutitle={title}></Cover>
            <div className='grid md:grid-cols-2 lg:grid-cols-3  gap-5'>
{
  
  dessert.map(item=><MenuItem key={item._id} item={item}></MenuItem>)

    
}
            </div>
     <Link to={`/order`}>
     <button>order</button></Link>
            
        </div>
    );
};

export default MenuByName;