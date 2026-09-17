import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    image: "/img/testimonial/6.jpg",
    name: "Mr. Rahul Sharma",
    role: "Happy Customer",
    message:
      "A smooth and transparent car-buying experience. The team was extremely helpful and professional.",
  },
  {
    image: "/img/testimonial/7.jpg",
    name: "Mr. Amit Patel",
    role: "Car Owner",
    message:
      "Excellent service and great vehicle options. Ruturaj Enterprises is definitely a trusted name for car buyers.",
  },
  {
    image: "/img/testimonial/1.jpg",
    name: "Mr. Vikas Verma",
    role: "Business Owner",
    message:
      "Very professional team with excellent customer support. I am completely satisfied with my experience.",
  },
  {
    image: "/img/testimonial/2.jpg",
    name: "Miss Neha Joshi",
    role: "Happy Customer",
    message:
      "The team made the entire process easy and stress-free. Great service and a wonderful overall experience.",
  },
  {
    image: "/img/testimonial/5.jpg",
    name: "Mr. Suresh Kumar",
    role: "Car Owner",
    message:
      "Good cars, transparent pricing, and excellent support. I highly recommend Ruturaj Enterprises.",
  },
];


const Testimonials = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      className="ltn__testimonial-area bg-image pt-115 pb-70"
      style={{
        backgroundImage: "url('/img/bg/8.jpg')",
      }}
    >
      <div className="container-fluid">

        {/* Section Heading */}
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

        {/* Testimonial Slider */}
        <div className="row">
          <div className="col-lg-12">

            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-slide">

                  <div className="ltn__testimonial-item ltn__testimonial-item-4">

                    {/* Client Image */}
                    {/* <div className="ltn__testimoni-img">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                    </div> */}

                    {/* Client Information */}
                    <div className="ltn__testimoni-info">

                      <p>
                        {testimonial.message}
                      </p>

                      <h4>
                        {testimonial.name}
                      </h4>

                      <h6>
                        {testimonial.role}
                      </h6>

                    </div>

                    {/* Background Icon */}
                    <div className="ltn__testimoni-bg-icon">
                      <i className="far fa-comments"></i>
                    </div>

                  </div>

                </div>
              ))}
            </Slider>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
