import React, {useState }from 'react';


const MenuItem = ({item}) => {
    

    
    const {name,image,price,recipe}=item
    return (
     <div>
       
           <div className='m-10 bg-black bg-opacity-5 rounded-xl px-5  grid hover:-translate-y-4 duration-300 hover:scale-105 shadow-2xl' >
            <img className=" lg:w-[200px] mx-auto  my-5 rounded-md    "  src={image}/>
            <div className='my-auto'>
                <h3 className=' uppercase tracking-wider font-medium'>{name}-----------</h3>
                <p className='tracking-wide text-zinc-500'>{recipe}</p>
            </div>
            <p className='text-yellow-700 flex my-10 lg:my-auto md:my-auto lg:ms-10 md:ms-10'><span className='font-semibold tracking-wide'>Price:</span> {price}</p>
            
        </div>
     </div>
    );
};

export default MenuItem;