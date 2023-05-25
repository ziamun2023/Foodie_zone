
import HeadTitle from '../../shared/HeadTitle';
import React from "react";
// Import Swiper React components
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
// import { Rating } from '@smastrom/react-rating'

// import '@smastrom/react-rating/style.css'

import  { useEffect,  useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";



// import required modules
import  { Navigation } from "swiper";

const Testimonial = () => {
    const [alldata,setAlldata]=useState([])
    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>setAlldata(data))
    },[])
    return (
        <section>
            <HeadTitle subheading={'what our client say'} heading={'TESTIMONIALS'}/>
          
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
     {alldata.map(item=>  <SwiperSlide key={item._id}>
        <div className='grid justify-items-center' > 
            <p className='text-center text-4xl text-orange-400 my-5'>{item.name}  </p>
            <div>
        <Rating 

style={{ maxWidth: 130 }}
value={item.rating}
readOnly
/>
        </div>
        <p className='text-center lg:text-2xl text-zinc-500 px-10 py-5 '>{item.details}  </p>
        
        </div>
     </SwiperSlide>)} 
      
      </Swiper>
 
      

         
        </section>
    );
};

export default Testimonial;