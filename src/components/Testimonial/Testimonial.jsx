import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
import { Pagination } from 'swiper/modules';
import './testimonial.css';
import { Data } from './Data';


const Testimonial = () => {
  return (
    <div className="section testimonial container" id='testimonial'>
        <h2 className="section_title">My Clients Say</h2>
        <span className="section_subtitle">Testimonial</span>
    
    <Swiper className="testimonial__container" loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}>
      {Data.map(({id, image, title, description}) =>{
        return(
          <SwiperSlide className="testimonial__card" key={id}>
            <img src={image} alt="" className="testimonial__image" />

            <h3 className="testimonial__name">{title}</h3>
            <p className="testimonial__description">{description}</p>
          </SwiperSlide>
        )
      })}
    </Swiper>
    
    </div>
  )
}

export default Testimonial