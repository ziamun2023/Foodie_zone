import React from 'react';

const HeadTitle = ({heading,subheading}) => {
    return (
        <div className='text-center md:w-3/12 mx-auto m-8 '>
            <p className='text-yellow-700 mb-5'>---{subheading}---</p>
            
            <p className='text-3xl border-y-4 py-4'>{heading}</p>
        </div>
    );
};

export default HeadTitle;