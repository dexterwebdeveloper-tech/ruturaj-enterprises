import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    image: "/images/testimonial/6.jpg",
    text: "Ruturaj Enterprises provided an excellent travel experience. The vehicle was clean, comfortable, and the driver was very professional.",
    name: "Mr. Rahul Sharma",
    role: "Business Owner",
  },
  {
    image: "/images/testimonial/7.jpg",
    text: "Very reliable and comfortable service. The driver was punctual and the entire journey was smooth and safe.",
    name: "Miss. Priya Patel",
    role: "Corporate Client",
  },
  {
    image: "/images/testimonial/1.jpg",
    text: "We booked a vehicle for our family trip and had a wonderful experience. Highly recommended for safe and comfortable travel.",
    name: "Mr. Amit Kumar",
    role: "Happy Client",
  },
  {
    image: "/images/testimonial/2.jpg",
    text: "Excellent transportation service with well-maintained vehicles and experienced drivers. We will definitely book again.",
    name: "Miss. Neha Verma",
    role: "Traveler",
  },
  {
    image: "/images/testimonial/5.jpg",
    text: "Professional service from start to finish. Everything was well managed and the journey was completely hassle-free.",
    name: "Mr. Suresh Patil",
    role: "Regular Client",
  },
];

const Testimonial = () => {
  return (
    <div
      className="ltn__testimonial-area bg-image py-3"
      style={{
        backgroundImage: "url('/images/bg/8.jpg')",
      }}
    >
      <div className="container-fluid">

        {/* Title */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2 text-center">
              <h6 className="section-subtitle ltn__secondary-color">
                // Testimonials
              </h6>

              <h1 className="section-title">
                Clients Feedbacks<span>.</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="row ltn__testimonial-slider-3-active slick-arrow-1 slick-arrow-1-inner">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="ltn__testimonial-item ltn__testimonial-item-4">

                  {/* <div className="ltn__testimoni-img">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                  </div> */}

                  <div className="ltn__testimoni-info">
                    <p>{testimonial.text}</p>

                    <h4>{testimonial.name}</h4>

                    <h6>{testimonial.role}</h6>
                  </div>

                  <div className="ltn__testimoni-bg-icon">
                    <i className="far fa-comments"></i>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </div>
  );
};

export default Testimonial;
