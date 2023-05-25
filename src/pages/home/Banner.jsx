
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Typewriter from 'typewriter-effect/dist/core';

import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'

const Banner = () => {
    return (
        <>
        
             <Carousel className='text-center'>
             
                <div className='relative'>
                <img className='rounded-xl bannerImg' src={img2} />
                    <p className="absolute bg-black bg-opacity-30 text-white lg:text-5xl tracking-wide uppercase lg:top-56 w-2/3 py-20 ms-5 ps-5 rounded-md md:top-20 sm:text-2xl sm:top-16  xs:top-20  md:text-3xl text-start">Sizzling Sensations: Fuel Your Culinary Adventure!</p>
                
                    
                </div>
                <div>
                <img className='rounded-xl bannerImg' src={img3} />
                <p className="absolute bg-black bg-opacity-30 text-white lg:text-5xl tracking-wide uppercase lg:top-56 w-2/3 py-20 ms-5 ps-5 rounded-md md:top-20 sm:text-2xl sm:top-16  xs:top-20  md:text-3xl text-start">Blazing Grills: Where Spice Meets Thrills!</p>
                </div>
                <div>
                <img className=' rounded-xl bannerImg' src={img4} />
                <p className="absolute bg-black bg-opacity-30 text-white lg:text-5xl tracking-wide uppercase lg:top-56 w-2/3 py-20 ms-5 ps-5 rounded-md md:top-20 sm:text-2xl sm:top-16  xs:top-20  md:text-3xl text-start">Spice Voyage: Discover Bold Flavors Here</p>
                </div>
                <div>
                <img className=' rounded-xl bannerImg' src={img5} />
                <p className="absolute bg-black bg-opacity-30 text-white lg:text-5xl tracking-wide uppercase lg:top-56 w-2/3 py-20 ms-5 ps-5 rounded-md md:top-20 sm:text-2xl sm:top-16  xs:top-20  md:text-3xl text-start">Flaming Delights: Ignite Your Taste Buds!</p>
                </div>
                <div>
                <img className='rounded-xl bannerImg' src={img6} />
                <p className="absolute bg-black bg-opacity-30 text-white lg:text-5xl tracking-wide uppercase lg:top-56 w-2/3 py-20 ms-5 ps-5 rounded-md md:top-20 sm:text-2xl sm:top-16  xs:top-20  md:text-3xl text-start">Zesty Fiesta: Indulge in Spicy Temptations</p>
                </div>
            </Carousel>
        </>
    );
};

export default Banner;