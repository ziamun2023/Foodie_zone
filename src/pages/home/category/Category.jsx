import img1 from '../../../assets/slide1.jpg'
import img2 from '../../../assets/slide2.jpg'
import img3 from '../../../assets/slide3.jpg'
import img4 from '../../../assets/slide4.jpg'
import img5 from '../../../assets/slide5.jpg'


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


import { Pagination } from "swiper";
import HeadTitle from '../../shared/HeadTitle'
const Category = () => {
    return (
        <section>
            <HeadTitle heading={'ORDER ONLINE'} subheading={'From 11 am to 10 pm'}/>
          <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24 "
      >
        <SwiperSlide><img className='' src={img1} alt="" />
        <h3 className='lg:text-4xl text-1xl uppercase text-center -mt-16 text-white '>salad</h3>
        </SwiperSlide>
        <SwiperSlide><img className='' src={img2} alt="" />
        <h3 className='lg:text-4xl text-1xl uppercase text-center -mt-16 text-white'>pizza</h3>
        </SwiperSlide>
        <SwiperSlide><img className='' src={img3} alt="" />
        <h3 className='lg:text-4xl text-1xl uppercase text-center -mt-16 text-white'>soup</h3>
        </SwiperSlide>
        <SwiperSlide><img className='' src={img4} alt="" />
        <h3 className='lg:text-4xl text-1xl uppercase text-center -mt-16 text-white'>desert</h3>
        </SwiperSlide>
        <SwiperSlide><img className='' src={img5} alt="" />
          <h3 className='lg:text-4xl text-1xl uppercase text-center -mt-16 text-white'>special salad</h3>
        </SwiperSlide>
       
      </Swiper>
            
        </section>
    );
};

export default Category;