import React from 'react';
import FoodCard from '../shared/FoodCard';

const OrderedTab = ({items}) => {
    console.log(items)
    return (
      <div>
          <div className='grid lg:grid-cols-3 gap-7 my-5'>
        {
            items.map(item=><FoodCard key={item._id} item={item} ></FoodCard>)
         }</div>
      </div>  
    );
};

export default OrderedTab;