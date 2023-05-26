import React from 'react';

const FoodCard = ({item}) => {
    const {name,image,price,recipe}=item
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image}  /></figure>
        <div className="card-body relative">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <p className='absolute text-orange-600'>{price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;